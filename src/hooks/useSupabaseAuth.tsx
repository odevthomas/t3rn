import { useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client'; // Verifique se esse caminho está correto
import type { Session, User } from '@supabase/supabase-js';

export function useSupabaseAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listener para mudanças de autenticação
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, currentSession) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);

      if (event === 'SIGNED_IN') {
        console.log('Usuário logado:', currentSession?.user?.email);
      } else if (event === 'SIGNED_OUT') {
        console.log('Usuário deslogado');
      }
    });

    // Verifica sessão atual ao montar
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string): Promise<{
    data: any;
    error: any;
  }> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error };
    }
  };

  const signUp = async (email: string, password: string): Promise<{
    data: any;
    error: any;
  }> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error };
    }
  };

  const signOut = async (): Promise<{ error: any }> => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      return { error };
    }
  };

  return {
    user,
    session,
    loading,
    signIn,
    signUp,
    signOut,
    supabase
  };
}

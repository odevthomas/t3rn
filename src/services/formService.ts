import { createContactMessage } from './apiService';
import { supabase, fetchDataFromApi } from '../integrations/supabase/client';

// Function to save contact message
export async function saveContactMessage(formData: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  try {
    const result = await createContactMessage(formData);
    return {
      success: true,
      message: 'Sua mensagem foi enviada com sucesso!',
      data: result
    };
  } catch (error: any) {
    console.error('Error saving contact message:', error);
    return {
      success: false,
      message: error.message || 'Ocorreu um erro ao enviar sua mensagem.',
      error
    };
  }
}

// Function to save newsletter subscription
export async function saveNewsletter(email: string) {
  try {
    // Check if email already exists in the newsletter_subscribers table
    const { data: existingSubscriber, error: queryError } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('email', email)
      .maybeSingle();

    if (queryError) throw queryError;

    if (existingSubscriber) {
      return {
        success: false,
        message: 'Este e-mail já está inscrito em nossa newsletter.'
      };
    }

    // Save new subscriber
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email })
      .select();

    if (error) throw error;

    return {
      success: true,
      message: 'Inscrição realizada com sucesso! Obrigado por se inscrever.',
      data
    };
  } catch (error: any) {
    console.error('Error saving newsletter subscription:', error);
    return {
      success: false,
      message: error.message || 'Ocorreu um erro ao processar sua inscrição.',
      error
    };
  }
}

import { supabase } from '../integrations/supabase/client';

// Function to fetch data from example_table
export async function fetchExampleData() {
  const { data, error } = await supabase
    .from('example_table')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
    throw new Error(error.message);
  }

  return data;
}

// Function to create a new contact message
export async function createContactMessage(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const { data: result, error } = await supabase
    .from('contact_messages')
    .insert([data])
    .select();

  if (error) {
    console.error('Error saving contact message:', error);
    throw new Error(error.message);
  }

  return result;
}

// Add more API functions as needed

// lib/supabaseClient.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Define types for environment variables
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create the Supabase client with proper typing
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

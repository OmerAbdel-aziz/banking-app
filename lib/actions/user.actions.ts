"use server"
import { supabase } from '@/app/utils/supabaseClient';




interface SignUpInput {
    email: string;
    password: string;
  }
  
  interface SignInInput {
    email: string;
    password: string;
  }

  export const signUp = async ({ email, password }: SignUpInput) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
  
      if (error) {
        throw new Error(error.message);
      }
  
      return {
        message: 'Sign-up successful! Please check your email to verify your account.',
        user: data.user,
      };
    } catch (err: any) {
      return { error: err.message };
    }
  };
  
  export const signIn = async ({ email, password }: SignInInput) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  
      if (error) {
        throw new Error(error.message);
      }
  
      return {
        message: 'Sign-in successful!',
        session: data.session,
        user: data.user,
      };
    } catch (err: any) {
      return { error: err.message };
    }
  };
  


  export async function getLoggedInUser() {
    try {
      // Retrieve the session to check if a user is logged in
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
  
      if (sessionError) {
        console.error('Error fetching session:', sessionError.message);
        return null;
      }
  
      if (!session) {
        // No session means no logged-in user
        return null;
      }
  
      // Retrieve user details from the session
      const user = session.user;
  
      return user; // Return the logged-in user's details
    } catch (error: any) {
      console.error('Error fetching logged-in user:', error.message);
      return null;
    }
  }


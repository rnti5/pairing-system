// src/auth.js
import { supabase } from "./supabase";

// Sign up function
export const signUp = async ({
  fullName,
  studentRefNumber,
  email,
  skills,
  desiredProjectField,
  password,
}) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  const { data, insertError } = await supabase.from("students").insert([
    {
      full_name: fullName,
      student_ref_number: studentRefNumber,
      email,
      skills,
      desired_project_field: desiredProjectField,
      user_id: user.id,
    },
  ]);

  if (insertError) {
    throw insertError;
  }

  return user;
};

// Sign in function
export const signIn = async (email, password) => {
  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return user;
};

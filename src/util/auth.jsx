// src/auth.js
import { supabase } from "./supabase";

export const signUp = async ({
  email,
  password,
  fullName,
  studentRefNumber,
  skills,
  desiredProjectField,
}) => {
  const { user, error } = await supabase.auth.signUp(
    { email, password },
    {
      data: {
        full_name: fullName,
        student_ref_number: studentRefNumber,
        skills: skills,
        desired_project_field: desiredProjectField,
      },
    }
  );

  if (error) throw error;

  const { error: profileError } = await supabase.from("profiles").insert([
    {
      user_id: user.id,
      full_name: fullName,
      student_ref_number: studentRefNumber,
      skills: skills,
      desired_project_field: desiredProjectField,
      role: "student",
    },
  ]);

  if (profileError) throw profileError;

  return user;
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data.user;
};

// src/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ycihpfttppvazcfntyrs.supabase.co"; // replace with your Supabase project URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljaWhwZnR0cHB2YXpjZm50eXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwMjE0NTMsImV4cCI6MjAzMzU5NzQ1M30.apOhHx40p61QEg03O_MiI3OqvgA9X8519zK68WNifLg"; // replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey);

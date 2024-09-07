import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jnjfsxfuyfgipjcqzdkr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpuamZzeGZ1eWZnaXBqY3F6ZGtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4MzkwNTUsImV4cCI6MjA0MDQxNTA1NX0.sp-6VmsKRdM_QHvQQ1o5FA4KwV-CxXObUjWb-3he-jU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

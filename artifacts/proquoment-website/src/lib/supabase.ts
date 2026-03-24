import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string ?? "https://gbgkemtfsxhpxjvkmxes.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiZ2tlbXRmc3hocHhqdmtteGVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMDcwNjEsImV4cCI6MjA4OTY4MzA2MX0.C8qGhpoTSpprPXtNeUvdHA7IGkYO2L2Bo_0C2ttdSz8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { createClient } from '@supabase/supabase-js';

// If you're using SUPABASE_URL / SUPABASE_ANON_KEY:
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase env vars. Check your .env file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  // Change "student" to any table you actually have
  const { data, error } = await supabase
    .from('student')
    .select('*')
    .limit(5);

  if (error) {
    console.error('Supabase error:', error);
  } else {
    console.log('Supabase connection OK. Rows:');
    console.log(data);
  }
}

main();

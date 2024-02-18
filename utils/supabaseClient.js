import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient('https://porxaoffrxnukdmjgkhb.supabase.co', 'e4QWwE9Cowb0uqVp40q/W/1YKzJrFgMNE+3PSFHGbNk3xGBTFY4+uR3BfgCEfW0Mh/9DWCQD34HIpy8ooa1baw==');

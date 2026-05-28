import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://trvnrhzswbdomjsarica.supabase.co'
const SUPABASE_KEY = 'sb_publishable_SxreAaofY-t51KBEfXqxcw_E4GhDZ96'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
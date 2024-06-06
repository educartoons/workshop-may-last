import { Database } from '../supabase'

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://iskyielexrkzjudmqpfl.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASEKEY

const supabase = createClient<Database>(supabaseUrl, supabaseKey)

export { supabase }

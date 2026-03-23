import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    // Helps debug why `channel.subscribe()` ends up in `CHANNEL_ERROR`.
    logger: (kind: string, message: string, data: unknown) => {
      //console.log(`[supabase-realtime] ${kind}: ${message}`, data);
    },
  },
});
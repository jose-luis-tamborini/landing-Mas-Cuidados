import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: 'Missing Supabase env vars' }, { status: 500 });
  }

  const { error } = await createClient(url, key)
    .from('contactos')
    .select('id')
    .limit(1);

  if (error) {
    console.error('[keepalive] Supabase error:', error.message);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

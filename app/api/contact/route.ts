import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

/*
  Tabla requerida en Supabase (ejecutar una vez en el SQL Editor):

  create table contactos (
    id          uuid primary key default gen_random_uuid(),
    created_at  timestamptz default now(),
    nombre      text not null,
    email       text not null,
    whatsapp    text not null,
    ciudad      text not null,
    servicio    text not null,
    mensaje     text
  );
*/

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  return createClient(url, key);
}

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('Missing RESEND_API_KEY');
  return new Resend(key);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, whatsapp, ciudad, servicio, mensaje } =
      body as Record<string, string>;

    // Validación server-side
    if (!nombre?.trim() || !email?.trim() || !whatsapp?.trim() || !ciudad?.trim() || !servicio?.trim()) {
      return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 422 });
    }

    const contacto = {
      nombre:   nombre.trim(),
      email:    email.trim(),
      whatsapp: whatsapp.trim(),
      ciudad:   ciudad.trim(),
      servicio: servicio.trim(),
      mensaje:  mensaje?.trim() || null,
    };

    // 1. Guardar en Supabase y 2. Enviar email — en paralelo
    const [dbResult, emailResult] = await Promise.allSettled([
      getSupabase().from('contactos').insert(contacto),
      getResend().emails.send({
        from: process.env.RESEND_FROM!,
        to: process.env.NOTIFICATION_EMAIL!,
        subject: `Nuevo contacto: ${contacto.nombre} — ${contacto.servicio}`,
        html: `
          <h2 style="color:#4A007D;font-family:sans-serif">Nuevo contacto desde el sitio web</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;width:100%;max-width:500px">
            <tr><td style="padding:8px 14px;font-weight:700;color:#4A007D;background:#f5f0fa">Nombre</td><td style="padding:8px 14px">${contacto.nombre}</td></tr>
            <tr><td style="padding:8px 14px;font-weight:700;color:#4A007D">Email</td><td style="padding:8px 14px">${contacto.email}</td></tr>
            <tr><td style="padding:8px 14px;font-weight:700;color:#4A007D;background:#f5f0fa">WhatsApp</td><td style="padding:8px 14px">${contacto.whatsapp}</td></tr>
            <tr><td style="padding:8px 14px;font-weight:700;color:#4A007D">Ciudad</td><td style="padding:8px 14px">${contacto.ciudad}</td></tr>
            <tr><td style="padding:8px 14px;font-weight:700;color:#4A007D;background:#f5f0fa">Servicio</td><td style="padding:8px 14px">${contacto.servicio}</td></tr>
            <tr><td style="padding:8px 14px;font-weight:700;color:#4A007D">Mensaje</td><td style="padding:8px 14px">${contacto.mensaje || '—'}</td></tr>
          </table>
        `,
      }),
    ]);

    // Si falla la DB, retornamos error (el email es no bloqueante)
    if (dbResult.status === 'rejected') {
      console.error('[Supabase] insert rejected:', dbResult.reason);
      return NextResponse.json({ error: 'Error al guardar el contacto.' }, { status: 500 });
    }

    const { error: dbError } = dbResult.value as { error: unknown };
    if (dbError) {
      console.error('[Supabase] insert error:', dbError);
      return NextResponse.json({ error: 'Error al guardar el contacto.' }, { status: 500 });
    }

    if (emailResult.status === 'rejected') {
      console.error('[Resend] promise rejected:', emailResult.reason);
    } else if (emailResult.value.error) {
      console.error('[Resend] API error:', JSON.stringify(emailResult.value.error));
    } else {
      console.log('[Resend] email enviado, id:', emailResult.value.data?.id);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('[API /contact]', err);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}

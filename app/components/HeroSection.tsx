'use client';

import { useState } from 'react';
import { CldImage } from 'next-cloudinary';

// Cloudinary public IDs
const HERO_BG_ID = 'hero_bg_ohgwet';
const LOGO_FORM_ID = 'logos_form_xfq6sc'; // reemplazá con el ID real cuando subas el logo

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function HeroSection() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Validación cliente
    let valid = true;
    form
      .querySelectorAll<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >('input[required], select[required], textarea[required]')
      .forEach((el) => {
        const wrap = el.closest('.field');
        if (!el.value.trim()) {
          wrap?.classList.add('error');
          valid = false;
        } else wrap?.classList.remove('error');
      });
    if (!valid) return;

    setStatus('loading');
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? 'Error al enviar.');
      }
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Hubo un error. Intentá de nuevo.',
      );
    }
  }

  return (
    <header className="hero" id="contacto">
      {/* Background photo */}
      <div className="hero-bg">
        <CldImage
          src={HERO_BG_ID}
          alt="Cuidadora profesional acompañando a adulto mayor"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      <div className="hero-inner">
        {/* Left — marca y titular */}
        <div>
          <div className="hero-logo">
            <CldImage
              src="logo_hero_hp4vf8"
              alt="Más Cuidados"
              width={336}
              height={122}
              style={{ objectFit: 'contain', height: 'auto' }}
              priority
            />
          </div>

          <h1>
            Cuidadoras y acompañantes
            <br />
            capacitados <span className="para">para</span>{' '}
            <span className="accent-lilac">Sanatorios y Domicilios</span>
          </h1>
          <hr />
          <p className="lede">
            Atención 24 hs, respuesta inmediata y la experiencia de un equipo
            que acompaña con compromiso desde 2010.
          </p>
        </div>

        {/* Right — form card */}
        <aside className="form-card" aria-labelledby="form-title">
          {status === 'success' ? (
            <div className="form-success">
              <div className="check">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4>¡Recibimos tu solicitud!</h4>
              <p>En breve un asesor se va a comunicar con vos.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h2 className="form-title" id="form-title">
                <span className="word-solicitar">Solicitar</span>{' '}
                <span className="word-una-cuidadora">una cuidadora</span>
              </h2>
              <p className="form-sub">
                Completá el formulario y te asesoramos.
              </p>

              <div className="field">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="field">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="field">
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="WhatsApp"
                  required
                />
              </div>
              <div className="field select">
                <select name="ciudad" required defaultValue="">
                  <option value="" disabled>Ciudad</option>
                  <option>Rosario</option>
                  <option>CABA</option>
                  <option>Córdoba</option>
                  <option>Santa Fe</option>
                  <option>Paraná</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="field select">
                <select name="servicio" required defaultValue="">
                  <option value="" disabled>
                    ¿Qué necesitás?
                  </option>
                  <option>Cuidadora a domicilio</option>
                  <option>Cuidadora en sanatorio</option>
                  <option>Cuidador profesional</option>
                </select>
              </div>
              <div className="field">
                <textarea name="mensaje" placeholder="Mensaje" rows={3} />
              </div>

              <button
                className="submit"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Enviando…' : 'Quiero que me contacten'}
              </button>

              {status === 'error' && (
                <p className="form-error-msg">{errorMsg}</p>
              )}

              <p className="form-foot">
                Tus datos son confidenciales. Solo los usamos para asesorarte.{' '}
                <a href="#" style={{ color: '#7B4FA6', fontWeight: 600 }}>
                  Política de privacidad.
                </a>
              </p>

              {/* Logo placeholder — reemplazá "mas-cuidados/logo-form" con el ID real */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: 10,
                }}
              >
                <CldImage
                  src={LOGO_FORM_ID}
                  alt="Logo certificación"
                  width={180}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </form>
          )}
        </aside>
      </div>
    </header>
  );
}

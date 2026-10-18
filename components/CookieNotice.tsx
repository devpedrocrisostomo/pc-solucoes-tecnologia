'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const storageKey = 'pc-solutions.cookie-notice.v1';
const reopenEvent = 'pc-solutions:show-cookie-notice';

export function CookieNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      setOpen(window.localStorage.getItem(storageKey) !== 'acknowledged');
    } catch {
      setOpen(true);
    }
    const show = () => setOpen(true);
    window.addEventListener(reopenEvent, show);
    return () => window.removeEventListener(reopenEvent, show);
  }, []);

  const acknowledge = () => {
    try {
      window.localStorage.setItem(storageKey, 'acknowledged');
    } catch {
      // O aviso continua funcional mesmo quando o armazenamento está bloqueado.
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <aside className="cookie-notice" role="region" aria-label="Aviso de cookies e privacidade">
      <div className="cookie-notice-copy">
        <strong>Privacidade com transparência.</strong>
        <p>
          Este site não ativa cookies de publicidade ou análise de visitas no código atual.
          Usamos armazenamento local para lembrar este aviso e cache para recursos do PWA.
          Serviços externos podem seguir suas próprias políticas.
        </p>
      </div>
      <div className="cookie-notice-actions">
        <Link href="/cookies">Saiba mais</Link>
        <button type="button" onClick={acknowledge}>Entendi</button>
      </div>
    </aside>
  );
}

export function CookieNoticeTrigger() {
  return (
    <button
      className="footer-privacy-trigger"
      type="button"
      onClick={() => window.dispatchEvent(new Event(reopenEvent))}
    >
      Aviso de cookies
    </button>
  );
}

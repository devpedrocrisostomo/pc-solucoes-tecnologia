'use client';

import { useEffect } from 'react';

export function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/sw.js`, { scope: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/` }).catch(() => undefined);
    }
  }, []);
  return null;
}

// src/serviceWorkerRegistration.js
export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(reg => console.log('Service Worker registrado:', reg))
        .catch(err => console.error('Error al registrar el Service Worker:', err));
    });
  }
}

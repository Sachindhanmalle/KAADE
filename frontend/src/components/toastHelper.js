export const toast = (message, type = 'info') => {
  const toastId = `toast-${Date.now()}`;
  const root = document.createElement('div');
  root.id = toastId;
  root.className = `fixed bottom-6 right-6 z-50 rounded-3xl px-5 py-4 text-sm font-medium shadow-2xl transition transform duration-200 ${
    type === 'success' ? 'bg-emerald-700 text-white' : type === 'error' ? 'bg-red-600 text-white' : 'bg-slate-900 text-white'
  }`;
  root.textContent = message;
  document.body.appendChild(root);
  setTimeout(() => {
    root.style.opacity = '0';
    setTimeout(() => { root.remove(); }, 300);
  }, 3200);
};

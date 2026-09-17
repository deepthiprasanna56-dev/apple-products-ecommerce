import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'

export function ToastContainer({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 px-4 py-3 bg-[#1d1d1f]/95 text-white backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 transform translate-y-0 animate-in fade-in slide-in-from-bottom-3"
        >
          {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#34c759] shrink-0" />}
          {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-[#ff453a] shrink-0" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-[#2997ff] shrink-0" />}
          <div className="flex-1 text-sm font-medium pr-1">{toast.message}</div>
          <button
            onClick={() => onDismiss(toast.id)}
            className="text-[#86868b] hover:text-white transition-colors p-1"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  )
}

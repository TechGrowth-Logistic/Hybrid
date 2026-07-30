import React from 'react';

export default function ServiceCard({ title, desc, icon, badge, actionText, onAction }) {
  return (
    <div className="group relative bg-white border border-slate-200/80 shadow-sm hover:shadow-xl dark:bg-slate-900/90 dark:border-slate-800 dark:shadow-none hover:border-blue-500/50 dark:hover:border-blue-500/50 p-6 md:p-8 rounded-3xl space-y-5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
      
      {/* Glow de acento al pasar el cursor */}
      <div className="absolute -right-12 -top-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />

      <div className="space-y-4 relative z-10">
        
        {/* Encabezado de la Tarjeta (Icono + Badge opcional) */}
        <div className="flex items-center justify-between">
          <div className="w-13 h-13 bg-blue-50 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
            <span className="material-symbols-outlined text-2xl">{icon}</span>
          </div>
          {badge && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
              {badge}
            </span>
          )}
        </div>

        {/* Título y Descripción */}
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>

      {/* Acción o Enlace al Pie de la Tarjeta (Opcional) */}
      {actionText && (
        <div className="pt-2 relative z-10 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <button 
            onClick={onAction}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 cursor-pointer"
          >
            {actionText}
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>
      )}

    </div>
  );
}
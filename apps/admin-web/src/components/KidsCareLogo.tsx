import type { JSX } from 'react';

type KidsCareLogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'standard' | 'icon' | 'horizontal' | 'full';
  className?: string;
  inverted?: boolean;
};

export function KidsCareLogo({
  size = 'md',
  showText = true,
  variant = 'standard',
  className = '',
  inverted = false,
}: KidsCareLogoProps): JSX.Element {
  if (variant === 'icon' || !showText) {
    const iconSizes = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
    };
    return (
      <div className={`flex items-center justify-center shrink-0 ${className}`}>
        <img
          src="/brand/kresyanimda-icon.png"
          alt="Kreş Yanımda"
          className={`${iconSizes[size]} w-auto object-contain drop-shadow-xs`}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 shrink-0 ${className}`}>
      {/* İkon / Amblem: Dolgun, net ve kutuyu tamamen dolduran boyutlandırma */}
      <div className="w-11 h-11 rounded-xl bg-white shadow-xs border border-white/30 p-1 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
        <img
          src="/brand/kresyanimda-icon.png"
          alt="Kreş Yanımda"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Yazı Bloğu: Yan yana, net, profesyonel tipografi */}
      <div className="flex flex-col justify-center leading-none select-none">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span
            className={`text-lg font-black tracking-tight ${
              inverted ? 'text-white' : 'text-stone-900 dark:text-white'
            }`}
          >
            Kreş Yanımda
          </span>
          <span
            className={`text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md ${
              inverted
                ? 'bg-emerald-400/25 text-emerald-200 border border-emerald-300/30'
                : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
            }`}
          >
            Portal
          </span>
        </div>
        <span
          className={`text-[11px] font-medium tracking-normal mt-1 whitespace-nowrap ${
            inverted ? 'text-teal-100/80' : 'text-stone-500 dark:text-stone-400'
          }`}
        >
          Kreş Yönetim Bilgi Sistemi
        </span>
      </div>
    </div>
  );
}

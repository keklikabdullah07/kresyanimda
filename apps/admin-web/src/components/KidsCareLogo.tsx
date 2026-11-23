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
  // Eğer sadece icon isteniyorsa (collapsed sidebar)
  if (variant === 'icon' || !showText) {
    const iconSizes = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
    };
    return (
      <div className={lex items-center justify-center shrink-0 }>
        <img
          src= /brand/kresyanimda-icon.png
          alt=Kreş Yanımda
          className={${iconSizes[size]} w-auto object-contain drop-shadow-xs}
        />
      </div>
    );
  }

  // Sidebar ve Navbar için yatay, ferah, tek satırda profesyonel logo
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16',
  };

  return (
    <div className={lex items-center gap-3 shrink-0 }>
      {/* İkon / Amblem */}
      <div className=w-10 h-10 rounded-xl bg-white/95 dark:bg-white/10 p-1 flex items-center justify-center shadow-xs border border-white/20 shrink-0>
        <img
          src=/brand/kresyanimda-icon.png
          alt=Kreş Yanımda
          className=w-full h-full object-contain
        />
      </div>

      {/* Yazı Bloğu: Yan yana, net, profesyonel tipografi */}
      <div className=flex flex-col justify-center leading-none select-none>
        <div className=flex items-center gap-1.5 whitespace-nowrap>
          <span
            className={	ext-lg font-black tracking-tight }
          >
            Kreş Yanımda
          </span>
          <span
            className={	ext-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md }
          >
            Portal
          </span>
        </div>
        <span
          className={	ext-[11px] font-medium tracking-normal mt-1 whitespace-nowrap }
        >
          Kreş Yönetim Bilgi Sistemi
        </span>
      </div>
    </div>
  );
}
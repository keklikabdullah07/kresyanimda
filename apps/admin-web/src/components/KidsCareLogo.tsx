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
  // Sidebar collapsed (kapalı) durumunda sadece kare amblem
  if (variant === 'icon' || !showText) {
    return (
      <div className={`flex items-center justify-center p-1.5 rounded-xl bg-white shadow-xs border border-white/20 shrink-0 ${className}`}>
        <img
          src="/brand/kresyanimda-emblem-tight.png"
          alt="Kreş Yanımda"
          className="w-8 h-8 object-contain"
        />
      </div>
    );
  }

  // Açık Sidebar için: Yanında ekstra yazı olmadan, doğrudan yatay orijinal logoyu boydan boya ferah gösteren modern tasarım
  return (
    <div className={`flex items-center w-full min-w-0 ${className}`}>
      <div className="w-full flex items-center bg-white/95 dark:bg-white/10 px-3 py-2 rounded-xl border border-white/25 shadow-xs hover:bg-white transition-all">
        <img
          src="/brand/kresyanimda-banner.png"
          alt="Kreş Yanımda"
          className="h-9 w-auto max-w-full object-contain"
        />
      </div>
    </div>
  );
}

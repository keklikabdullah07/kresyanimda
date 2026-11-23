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
  // Sidebar collapsed (kapalı) durumunda
  if (variant === 'icon' || !showText) {
    return (
      <div className={`w-10 h-10 flex items-center justify-center p-1.5 rounded-xl bg-white shadow-xs shrink-0 ${className}`}>
        <img
          src="/brand/k-icon-original.png"
          alt="Kreş Yanımda"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Açık Sidebar için: Beyaz kutuyu tüm genişliğe yayan ve logoyu kutunun tamamına oturtan yapı
  return (
    <div className={`flex items-center w-full min-w-0 ${className}`}>
      <div className="w-full h-14 bg-white px-3 py-1 rounded-2xl shadow-sm border border-white/20 flex items-center justify-center">
        <img
          src="/brand/kresyanimda-banner.png"
          alt="Kreş Yanımda"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

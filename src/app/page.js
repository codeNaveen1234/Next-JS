'use client';

import { useState, useEffect } from 'react';


export default function Home() {
  // const [deferredPrompt, setDeferredPrompt] = useState(null);
  // const [isIOS, setIsIOS] = useState(false);
  // const [isStandalone, setIsStandalone] = useState(false);

  // useEffect(() => {
  //   // Check if app is already installed
  //   setIsStandalone(window.matchMedia('(display-mode: standalone)').matches);
    
  //   // Check if iOS
  //   setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent));
    
  //   window.addEventListener('beforeinstallprompt', (e) => {
  //     e.preventDefault();
  //     setDeferredPrompt(e);

  //   });
  // }, []);

  // const handleInstallClick = async () => {
  //   if (deferredPrompt) {
  //     deferredPrompt.prompt();
  //     const { outcome } = await deferredPrompt.userChoice;
  //     if (outcome === 'accepted') {
  //       setDeferredPrompt(null);
  //     }
  //   }
  // };

  // if (isStandalone) return null;

  return (
    <div className="install-prompt">
      Hello
  </div>
  );
}

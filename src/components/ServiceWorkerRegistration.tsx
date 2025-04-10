
import { useEffect, useState } from 'react';

const ServiceWorkerRegistration = () => {
  const [isOfflineReady, setIsOfflineReady] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
          .then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            setIsOfflineReady(true);
            
            // Show notification briefly
            setTimeout(() => {
              const notification = document.getElementById('offline-notification');
              if (notification) {
                notification.classList.add('show');
                
                // Hide after 5 seconds
                setTimeout(() => {
                  notification.classList.remove('show');
                }, 5000);
              }
            }, 1000);
          })
          .catch(error => {
            console.error('ServiceWorker registration failed: ', error);
          });
      });
    }
  }, []);

  return (
    <div 
      id="offline-notification" 
      className="offline-ready"
      aria-live="polite"
    >
      Website available offline
    </div>
  );
};

export default ServiceWorkerRegistration;

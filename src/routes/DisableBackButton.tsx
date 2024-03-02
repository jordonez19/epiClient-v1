import { useEffect } from 'react';

const DisableBackButton = () => {

  useEffect(() => {
    const handleBackButton = (event: any) => {
      event.preventDefault();
      // Recarga la página actual
      window.location.reload();
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return null;
};

export default DisableBackButton;

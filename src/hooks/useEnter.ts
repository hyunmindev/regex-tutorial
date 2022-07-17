import { useEffect } from 'react';

export default (callback: () => void) => {
  const handleKeydown = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);
};

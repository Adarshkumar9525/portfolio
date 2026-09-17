import { useState, useEffect } from 'react';

export function use3DMode() {
  const [is3DMode, setIs3DMode] = useState(() => {
    // Check localStorage or device capability
    const saved = localStorage.getItem('is3DMode');
    if (saved !== null) {
      return saved === 'true';
    }
    // Check if WebGL is available and not low-power screen
    return true;
  });

  useEffect(() => {
    localStorage.setItem('is3DMode', is3DMode);
  }, [is3DMode]);

  const toggle3DMode = () => {
    setIs3DMode(prev => !prev);
  };

  return { is3DMode, toggle3DMode };
}

import { useState, useCallback } from 'react';

const useTheme = () => {
  const [colors, setColors] = useState({
    xColor: '#e74c3c',
    oColor: '#3498db',
    boardColor: '#34495e',
    backgroundColor: '#ecf0f1',
    cellColor: '#ffffff'
  });

  const updateColor = useCallback((colorKey, newColor) => {
    setColors(prev => ({ ...prev, [colorKey]: newColor }));
  }, []);

  return { colors, updateColor };
};

export default useTheme;
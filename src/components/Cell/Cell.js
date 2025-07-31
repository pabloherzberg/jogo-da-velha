import React from 'react';

const Cell = ({ value, onClick, colors, index }) => {
  const cellStyle = {
    width: '80px',
    height: '80px',
    border: `2px solid ${colors.boardColor}`,
    backgroundColor: colors.cellColor,
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: value ? 'default' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    color: value === 'X' ? colors.xColor : colors.oColor
  };

  const handleMouseEnter = (e) => {
    if (!value) {
      e.target.style.backgroundColor = '#f8f9fa';
      e.target.style.transform = 'scale(1.05)';
    }
  };

  const handleMouseLeave = (e) => {
    if (!value) {
      e.target.style.backgroundColor = colors.cellColor;
      e.target.style.transform = 'scale(1)';
    }
  };

  const handleClick = () => {
    onClick(index);
  };

  return (
    <button
      style={cellStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`Célula ${index + 1}, ${value || 'vazia'}`}
    >
      {value}
    </button>
  );
};

export default Cell;
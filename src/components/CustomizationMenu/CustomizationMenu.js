import React from 'react';

const CustomizationMenu = ({ colors, onColorChange, isOpen, onToggle }) => {
  const menuStyle = {
    position: 'fixed',
    top: '20px',
    right: isOpen ? '20px' : '-300px',
    width: '280px',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    transition: 'right 0.3s ease',
    zIndex: 1000
  };

  const toggleButtonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    fontSize: '18px',
    zIndex: 1001,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.2s ease'
  };

  const colorInputStyle = {
    width: '50px',
    height: '30px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px'
  };

  const inputGroupStyle = {
    marginBottom: '15px'
  };

  const handleToggleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#2980b9';
  };

  const handleToggleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#3498db';
  };

  const handleColorChange = (colorKey) => (e) => {
    onColorChange(colorKey, e.target.value);
  };

  return (
    <>
      <button
        style={toggleButtonStyle}
        onClick={onToggle}
        onMouseEnter={handleToggleMouseEnter}
        onMouseLeave={handleToggleMouseLeave}
        aria-label="Menu de personalização"
      >
        🎨
      </button>
      
      <div style={menuStyle}>
        <h3 style={{ marginTop: 0, color: '#2c3e50' }}>Personalizar Cores</h3>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Cor do X:</label>
          <input
            type="color"
            value={colors.xColor}
            onChange={handleColorChange('xColor')}
            style={colorInputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Cor do O:</label>
          <input
            type="color"
            value={colors.oColor}
            onChange={handleColorChange('oColor')}
            style={colorInputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Cor do Tabuleiro:</label>
          <input
            type="color"
            value={colors.boardColor}
            onChange={handleColorChange('boardColor')}
            style={colorInputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Cor de Fundo:</label>
          <input
            type="color"
            value={colors.backgroundColor}
            onChange={handleColorChange('backgroundColor')}
            style={colorInputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Cor das Células:</label>
          <input
            type="color"
            value={colors.cellColor}
            onChange={handleColorChange('cellColor')}
            style={colorInputStyle}
          />
        </div>
      </div>
    </>
  );
};

export default CustomizationMenu;
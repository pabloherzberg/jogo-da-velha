import React from 'react';

const ScoreBoard = ({ scores, onReset }) => {
  const scoreStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    minWidth: '200px'
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#95a5a6',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.2s ease'
  };

  const isGameComplete = scores.X >= 11 || scores.O >= 11;
  const overallWinner = scores.X >= 11 ? 'X' : scores.O >= 11 ? 'O' : null;

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#7f8c8d';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#95a5a6';
  };

  return (
    <div style={scoreStyle}>
      <h3>Placar</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10px 0' }}>
        <div>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#e74c3c' }}>X</div>
          <div style={{ fontSize: '24px' }}>{scores.X}</div>
        </div>
        <div>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#3498db' }}>O</div>
          <div style={{ fontSize: '24px' }}>{scores.O}</div>
        </div>
      </div>
      {isGameComplete && (
        <div style={{ 
          color: '#27ae60', 
          fontWeight: 'bold', 
          fontSize: '16px',
          margin: '10px 0' 
        }}>
          🎉 Jogador {overallWinner} venceu!
        </div>
      )}
      <button
        onClick={onReset}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Zerar Placar
      </button>
    </div>
  );
};

export default ScoreBoard;
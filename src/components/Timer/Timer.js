import React from 'react';

const Timer = ({ timeLeft, isActive }) => {
  const timerStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: timeLeft <= 2 ? '#e74c3c' : '#2c3e50',
    animation: timeLeft <= 2 ? 'pulse 1s infinite' : 'none'
  };

  return (
    <div style={timerStyle}>
      Tempo restante: {timeLeft}s
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Timer;
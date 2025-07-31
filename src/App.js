import React, { useState, useEffect } from 'react';

import useGameState from './hooks/useGameState';
import useTheme from './hooks/useTheme';


import Board from './components/Board/Board';
import Timer from './components/Timer/Timer';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import CustomizationMenu from './components/CustomizationMenu/CustomizationMenu';

const App = () => {
  const gameState = useGameState();
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    board,
    currentPlayer,
    gameStatus,
    winner,
    scores,
    timeLeft,
    isTimerActive,
    makeMove,
    resetGame,
    resetScores,
    setIsTimerActive,
    setTimeLeft,
    makeAutoMove
  } = gameState;

  const { colors, updateColor } = theme;

  
  useEffect(() => {
    let interval = null;
    
    if (isTimerActive && gameStatus === 'playing') {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            makeAutoMove();
            return 5;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerActive, gameStatus, makeAutoMove, setTimeLeft]);

  
  useEffect(() => {
    if (gameStatus === 'playing' && board.every(cell => cell === null)) {
      setIsTimerActive(true);
    }
  }, [gameStatus, board, setIsTimerActive]);

  
  const handleCellClick = (index) => {
    if (makeMove(index)) {
      setTimeLeft(5);
    }
  };

  const handleNewGame = () => {
    resetGame();
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  
  const appStyle = {
    minHeight: '100vh',
    backgroundColor: colors.backgroundColor,
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  };

  const gameInfoStyle = {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    minWidth: '300px'
  };

  const mainContentStyle = {
    display: 'flex',
    gap: '30px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.2s ease'
  };

  const instructionsStyle = {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: '14px',
    marginTop: '20px'
  };

  const handleButtonMouseEnter = (e) => {
    e.target.style.backgroundColor = '#229954';
  };

  const handleButtonMouseLeave = (e) => {
    e.target.style.backgroundColor = '#27ae60';
  };

  
  const getGameStatusMessage = () => {
    if (gameStatus === 'playing') {
      return `Vez do jogador: ${currentPlayer}`;
    }
    if (gameStatus === 'winner') {
      return `🎉 Jogador ${winner} venceu!`;
    }
    if (gameStatus === 'draw') {
      return '🤝 Empate!';
    }
    return '';
  };

  
  const getButtonText = () => {
    return gameStatus === 'playing' ? 'Reiniciar Jogo' : 'Novo Jogo';
  };

  return (
    <div style={appStyle}>
      <div style={containerStyle}>
       
        <h1 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '30px' }}>
          🎮 Jogo da Velha
        </h1>

       
        <div style={mainContentStyle}>
         
          <div>
           
            <div style={gameInfoStyle}>
              <h2 style={{ margin: '0 0 15px 0', color: '#2c3e50' }}>
                {getGameStatusMessage()}
              </h2>
              
             
              {gameStatus === 'playing' && (
                <Timer timeLeft={timeLeft} isActive={isTimerActive} />
              )}
              
             
              <div style={{ marginTop: '15px' }}>
                <button
                  onClick={handleNewGame}
                  style={buttonStyle}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  {getButtonText()}
                </button>
              </div>
            </div>

           
            <div style={{ marginTop: '20px' }}>
              <Board
                board={board}
                onCellClick={handleCellClick}
                colors={colors}
              />
            </div>
          </div>

    
          <ScoreBoard
            scores={scores}
            onReset={resetScores}
          />
        </div>

       
        <div style={instructionsStyle}>
          <p>Primeiro a conseguir 11 vitórias ganha o campeonato!</p>
          <p>Use o menu de personalização (🎨) para alterar as cores.</p>
        </div>
      </div>

     
      <CustomizationMenu
        colors={colors}
        onColorChange={updateColor}
        isOpen={menuOpen}
        onToggle={handleMenuToggle}
      />
    </div>
  );
};

export default App;
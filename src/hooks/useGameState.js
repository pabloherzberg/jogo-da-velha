import { useState, useCallback } from 'react';

const useGameState = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameStatus, setGameStatus] = useState('playing');
  const [winner, setWinner] = useState(null);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [timeLeft, setTimeLeft] = useState(5);
  const [isTimerActive, setIsTimerActive] = useState(false);


  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
  ];

  
  const checkWinner = useCallback((currentBoard) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a];
      }
    }
    return null;
  }, [winPatterns]);

  
  const makeMove = useCallback((index) => {
    if (board[index] || gameStatus !== 'playing') return false;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameStatus('winner');
      setScores(prev => ({ ...prev, [gameWinner]: prev[gameWinner] + 1 }));
      setIsTimerActive(false);
    } else if (newBoard.every(cell => cell !== null)) {
      setGameStatus('draw');
      setIsTimerActive(false);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      setTimeLeft(5);
    }

    return true;
  }, [board, currentPlayer, gameStatus, checkWinner]);

  
  const makeAutoMove = useCallback(() => {
    const emptyCells = board.map((cell, index) => cell === null ? index : null).filter(val => val !== null);
    if (emptyCells.length > 0) {
      const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      makeMove(randomIndex);
    }
  }, [board, makeMove]);

  
  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameStatus('playing');
    setWinner(null);
    setTimeLeft(5);
    setIsTimerActive(true);
  }, []);

  
  const resetScores = useCallback(() => {
    setScores({ X: 0, O: 0 });
  }, []);

  return {
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
  };
};

export default useGameState;
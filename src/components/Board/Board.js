import React from 'react';
import Cell from '../Cell/Cell';

const Board = ({ board, onCellClick, colors }) => {
  const boardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '4px',
    padding: '20px',
    backgroundColor: colors.boardColor,
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={boardStyle}>
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          onClick={onCellClick}
          colors={colors}
          index={index}
        />
      ))}
    </div>
  );
};

export default Board;
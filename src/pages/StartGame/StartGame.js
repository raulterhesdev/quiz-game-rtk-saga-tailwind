import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { startGame } from '../../store/slices/gameState.slice';

const StartGame = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('Raul');

  const startGameHandler = () => {
    dispatch(startGame({ username }));
  };
  return (
    <div className='flex flex-col justify-center items-center mt-80'>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Your Name...'
        className='py-2 px-4 outline-none rounded shadow w-64 mb-6'
      />
      <Button onClick={startGameHandler}>Start Game</Button>
    </div>
  );
};

export default StartGame;

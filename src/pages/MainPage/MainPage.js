import React from 'react';
import StartGamePage from '../StartGame/StartGame';
import GamePage from '../GamePage/GamePage';
import EndGamePage from '../EndGamePage/EndGamePage';
import FetchingGamePage from '../FetchingGamePage/FetchingGamePage';
import { useSelector } from 'react-redux';
import {
  START_GAME,
  FETCHING_GAME_DATA,
  GAME,
  END_GAME,
} from '../../utils/constants';

const MainPage = () => {
  const currentStage = useSelector((state) => state.gameState.stage);

  let displayedPage;
  switch (currentStage) {
    case START_GAME:
      displayedPage = <StartGamePage />;
      break;
    case FETCHING_GAME_DATA:
      displayedPage = <FetchingGamePage />;
      break;
    case GAME:
      displayedPage = <GamePage />;
      break;
    case END_GAME:
      displayedPage = <EndGamePage />;
      break;
    default:
      break;
  }

  return (
    <div className='font-mono bg-purple-50 min-h-screen '>
      <h1 className='bg-purple-500 text-white p-4 text-2xl text-center uppercase'>
        Redux Saga Quiz Game
      </h1>
      {displayedPage}
    </div>
  );
};

export default MainPage;

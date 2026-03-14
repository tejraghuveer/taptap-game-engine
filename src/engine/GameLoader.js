// GameLoader.js

import React from 'react';
import AdventureGame from './components/AdventureGame';
import PuzzleGame from './components/PuzzleGame';
import ShooterGame from './components/ShooterGame';

const GameLoader = ({ gameType }) => {
    switch (gameType) {
        case 'adventure':
            return <AdventureGame />;
        case 'puzzle':
            return <PuzzleGame />;
        case 'shooter':
            return <ShooterGame />;
        default:
            return <div>Game type not found!</div>;
    }
};

export default GameLoader;

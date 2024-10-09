export type GameStatus = 'SELECT_DIFFICULTY' | 'IN_PROGRESS' | 'WON' | 'LOST';

export type GameState = {
    gameStatus: GameStatus;
    guessedLetters: string[];
    word: string;
    lifeLeft: number;
};

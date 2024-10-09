export type GameStatus = 'SELECT_DIFFICULTY' | 'IN_PROGRESS' | 'WON' | 'LOST';

export type GameState = {
    gameStatus: GameStatus;
    guessedLetters: string[];
    word: string;
    lifeLeft: number;
};

export interface HangmanLetter {
    char: string;
    index: number;
    visible: boolean;
}

export interface LetterSelect {
    letter: string;
    disabled: boolean;
}

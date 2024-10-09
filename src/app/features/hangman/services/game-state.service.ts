import { computed, effect, inject, Injectable, Signal } from '@angular/core';
import { LocalStorageService } from '@app/shared/services/local-storage.service';
import { PartialStateUpdater, patchState, signalState } from '@ngrx/signals';
import { GameState, GameStatus } from '../model/game.model';

const initialState: GameState = {
    gameStatus: 'SELECT_DIFFICULTY',
    guessedLetters: [],
    word: '',
    lifeLeft: 10,
};

@Injectable()
export class GameStateService {
    private _state = signalState<GameState>(initialState);

    public state: Signal<GameState> = this._state;
    public status: Signal<GameStatus> = this._state.gameStatus;
    public guessedLetters: Signal<string[]> = this._state.guessedLetters;
    public word: Signal<string> = this._state.word;
    public lifeLeft: Signal<number> = this._state.lifeLeft;

    public gameOver: Signal<boolean> = computed(() => {
        return this.status() === 'LOST' || this.status() === 'WON';
    });

    private readonly localStorageKey = 'hangman-game-state';
    private lss = inject(LocalStorageService);

    constructor() {
        // Load state from local storage if it exists
        const lsState = this.lss.getItem(this.localStorageKey);
        if (lsState) patchState(this._state, lsState);

        // Save state whenever it changes
        effect(() => {
            this.lss.setItem(this.localStorageKey, this.state());
        });
    }

    public selectDifficulty(): void {
        patchState(this._state, { gameStatus: 'SELECT_DIFFICULTY' });
    }

    private startGameUpdater(word: string): PartialStateUpdater<GameState> {
        return (state) => {
            return {
                ...state,
                gameStatus: 'IN_PROGRESS',
                word,
            };
        };
    }

    public startGame(word: string): void {
        patchState(this._state, this.startGameUpdater(word));
    }

    public guessLetter(letter: string): void {
        if (this.guessedLetters().includes(letter)) return;

        let currentLife = this.lifeLeft();
        if (!this.state().word.includes(letter)) --currentLife;

        patchState(this._state, (state) => ({
            ...state,
            guessedLetters: [...state.guessedLetters, letter],
            lifeLeft: currentLife,
        }));

        this.checkWinOrLose();
    }

    public resetGame(): void {
        patchState(this._state, {
            ...initialState,
        });
    }

    public givingUp(): void {
        patchState(this._state, { gameStatus: 'LOST' });
    }

    private checkWinOrLose(): void {
        if (
            this.state()
                .word.split('')
                .every((letter) => this.state().guessedLetters.includes(letter))
        ) {
            patchState(this._state, { gameStatus: 'WON' });
        } else if (this.state().lifeLeft === 0) {
            patchState(this._state, { gameStatus: 'LOST' });
        }
    }
}

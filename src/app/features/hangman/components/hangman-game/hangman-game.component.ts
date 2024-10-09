import { CommonModule } from '@angular/common';
import { Component, computed, inject, Signal } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { GameStateService } from '../../services/game-state.service';
import { HangmanIndicatorComponent } from '../hangman-indicator/hangman-indicator.component';
import { HangmanLetterComponent } from '../hangman-letter/hangman-letter.component';
import { LetterSelectComponent } from '../letter-select/letter-select.component';

@Component({
    selector: 'app-hangman-game',
    standalone: true,
    imports: [ButtonComponent, CommonModule, LetterSelectComponent, HangmanLetterComponent, HangmanIndicatorComponent],
    templateUrl: './hangman-game.component.html',
    styleUrl: './hangman-game.component.scss',
})
export class HangmanGameComponent {
    public gameStateService = inject(GameStateService);

    public wordLetters: Signal<{ char: string; index: number; visible: boolean }[]> = computed(() => {
        const word = this.gameStateService.word();
        const guessedLetters = this.gameStateService.guessedLetters();
        const status = this.gameStateService.status();

        return word.split('').map((char, index) => ({
            char,
            index,
            visible: guessedLetters.includes(char) || status === 'LOST',
        }));
    });

    constructor() {}
}

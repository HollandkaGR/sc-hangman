import { Component, computed, inject, Signal } from '@angular/core';
import { LetterSelect } from '../../model/game.model';
import { GameStateService } from '../../services/game-state.service';

@Component({
    selector: 'app-letter-select',
    standalone: true,
    imports: [],
    templateUrl: './letter-select.component.html',
    styleUrl: './letter-select.component.scss',
})
export class LetterSelectComponent {
    public lettersToSelect: Signal<LetterSelect[]> = computed(() => {
        const guessedLetters = this.gameStateService.guessedLetters();
        return this.letters.map((letter) => ({
            letter,
            disabled: guessedLetters.includes(letter),
        }));
    });

    // prettier-ignore
    private readonly letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    private gameStateService = inject(GameStateService);

    public gameOver: Signal<boolean> = this.gameStateService.gameOver;

    public selectLetter(letter: string) {
        this.gameStateService.guessLetter(letter);
    }
}

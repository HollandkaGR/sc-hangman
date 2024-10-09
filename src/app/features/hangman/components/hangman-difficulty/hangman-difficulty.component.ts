import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { GameStateService } from '../../services/game-state.service';
import { WordService } from '../../services/word.service';

@Component({
    selector: 'app-hangman-difficulty',
    standalone: true,
    imports: [FormsModule, CommonModule, ButtonComponent],
    templateUrl: './hangman-difficulty.component.html',
    styleUrl: './hangman-difficulty.component.scss',
})
export class HangmanDifficultyComponent {
    public lenghtOfWord: number | undefined;

    public gameStateService = inject(GameStateService);
    public wordService = inject(WordService);
    public possibleLengths$ = this.wordService.getWordsLengthsSet();

    constructor(private router: Router) {}

    public startGame(): void {
        if (!this.lenghtOfWord) return;
        this.wordService.getWord(this.lenghtOfWord).subscribe((word) => this.gameStateService.startGame(word));
    }

    public showRules(): void {
        this.router.navigate(['/']);
    }
}

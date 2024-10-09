import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { GameStateService } from '../../services/game-state.service';

@Component({
    selector: 'app-hangman-won',
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: './hangman-won.component.html',
    styleUrl: './hangman-won.component.scss',
})
export class HangmanWonComponent {
    public gameStateService = inject(GameStateService);
    constructor() {}
}

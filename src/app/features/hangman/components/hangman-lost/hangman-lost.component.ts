import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { GameStateService } from '../../services/game-state.service';

@Component({
    selector: 'app-hangman-lost',
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: './hangman-lost.component.html',
    styleUrl: './hangman-lost.component.scss',
})
export class HangmanLostComponent {
    public gameStateService = inject(GameStateService);
    constructor() {}
}

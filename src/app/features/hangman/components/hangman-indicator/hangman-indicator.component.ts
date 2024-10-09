import { transition, trigger, useAnimation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { fadeIn } from 'ng-animate';
import { GameStateService } from '../../services/game-state.service';

@Component({
    selector: 'app-hangman-indicator',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hangman-indicator.component.html',
    styleUrl: './hangman-indicator.component.scss',
    animations: [trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, { params: { timing: 1 } }))])],
})
export class HangmanIndicatorComponent {
    private readonly gameStateService = inject(GameStateService);
    public lifeLeft: Signal<number> = this.gameStateService.lifeLeft;
}

import { transition, trigger, useAnimation } from '@angular/animations';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HangmanDifficultyComponent } from '@app/features/hangman/components/hangman-difficulty/hangman-difficulty.component';
import { HangmanGameComponent } from '@app/features/hangman/components/hangman-game/hangman-game.component';
import { HangmanLostComponent } from '@app/features/hangman/components/hangman-lost/hangman-lost.component';
import { HangmanWonComponent } from '@app/features/hangman/components/hangman-won/hangman-won.component';
import { GameStateService } from '@app/features/hangman/services/game-state.service';
import { WordService } from '@app/features/hangman/services/word.service';
import { fadeInDown, fadeInUp } from 'ng-animate';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
    selector: 'app-game',
    standalone: true,
    imports: [
        HttpClientModule,
        ButtonComponent,
        HangmanDifficultyComponent,
        HangmanGameComponent,
        HangmanWonComponent,
        HangmanLostComponent,
    ],
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss',
    providers: [WordService, GameStateService],
    animations: [
        trigger('wonEffect', [transition('* => *', useAnimation(fadeInUp, { params: { timing: 0.2 } }))]),
        trigger('lostEffect', [transition('* => *', useAnimation(fadeInDown, { params: { timing: 0.2 } }))]),
    ],
})
export class GameComponent {
    public gameStateService = inject(GameStateService);
    public constructor(private router: Router) {}

    public checkRules(): void {
        this.router.navigate(['/']);
    }
}

import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { GameStateService } from '@app/features/hangman/services/game-state.service';
import { WordService } from '@app/features/hangman/services/word.service';

@Component({
    selector: 'app-game',
    standalone: true,
    imports: [HttpClientModule],
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss',
    providers: [WordService, GameStateService],
})
export class GameComponent {}

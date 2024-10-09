import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { HangmanLetter } from '../../model/game.model';

@Component({
    selector: 'app-hangman-letter',
    standalone: true,
    imports: [],
    templateUrl: './hangman-letter.component.html',
    styleUrl: './hangman-letter.component.scss',
    animations: [
        trigger('fadeIn', [transition(':enter', [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))])]),
    ],
})
export class HangmanLetterComponent {
    @Input({ required: true })
    public letter!: HangmanLetter;

    constructor() {}
}

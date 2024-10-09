import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent {
    @Input({ required: true })
    label: string = 'Default label';

    @Input()
    disabled: boolean = false;

    @Input()
    type: 'INFO' | 'DANGER' | 'SUCCESS' | 'WARNING' = 'INFO';

    @Output()
    onClick = new EventEmitter<void>();

    constructor() {}

    buttonClicked(): void {
        this.onClick.emit();
    }
}

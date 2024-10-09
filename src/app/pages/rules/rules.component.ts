import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@app/shared/components/button/button.component';

@Component({
    selector: 'app-rules',
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: './rules.component.html',
    styleUrl: './rules.component.scss',
})
export class RulesComponent {
    constructor(private router: Router) {}

    public startGame(): void {
        this.router.navigate(['/game']);
    }
}

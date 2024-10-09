import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from '@app/app.routes';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
    public navItems: { displayName: string; slug: string }[] = [];

    constructor() {
        this.navItems = appRoutes.map((route) => ({ displayName: route.displayName, slug: route.route.path || '' }));
    }
}

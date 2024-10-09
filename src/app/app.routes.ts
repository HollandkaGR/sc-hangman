import { Route, Routes } from '@angular/router';

import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { GameComponent } from './pages/game/game.component';
import { RulesComponent } from './pages/rules/rules.component';

export const appRoutes: { displayName: string; route: Route }[] = [
    { displayName: 'Rules', route: { path: '', component: RulesComponent } },
    { displayName: 'Game', route: { path: 'game', component: GameComponent } },
];

export const routes: Routes = [...appRoutes.map((r) => r.route), { path: '**', component: NotFoundComponent }];

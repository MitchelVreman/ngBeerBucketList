import { Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { BeerListComponent } from './pages/beer-list/beer-list.component';
import { BeerTasteComponent } from './pages/beer-taste/beer-taste.component';

export const ROUTES: Routes = [
    {path: '', component: HomepageComponent, pathMatch: 'full', data: {}},
    {path: 'beer-list', component: BeerListComponent, pathMatch: 'full', data: {}},
    {path: 'beer-taste', component: BeerTasteComponent, pathMatch: 'full'},
    {path: '**', redirectTo: ''},
];

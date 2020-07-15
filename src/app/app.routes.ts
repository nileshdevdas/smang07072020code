import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TelevisionComponent } from './television/television.component';
import { TheatreComponent } from './theatre/theatre.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelpComponent } from './help/help.component';
import { OopsComponent } from './oops/oops.component';
import { AuthGuard } from './auth.guard';
import { ActionComponent } from './action/action.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ThrillerComponent } from './thriller/thriller.component';
import { WarComponent } from './war/war.component';
import { RomanceComponent } from './romance/romance.component';
import { ScifiComponent } from './scifi/scifi.component';
import { Route } from '@angular/compiler/src/core';

const movieroutes = [
    { path: '', component: ActionComponent },
    { path: 'thriller', component: ThrillerComponent },
    { path: 'war', component: WarComponent },
    { path: 'romance', component: RomanceComponent },
    { path: 'scifi', component: ScifiComponent },
    { path: '**', component: OopsComponent },
];
export const routes = [
    { path: '', component: HomeComponent },
    { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard], children: movieroutes },
    { path: 'television', component: TelevisionComponent, canActivate: [AuthGuard] },
    { path: 'theatre', component: TheatreComponent, canActivate: [AuthGuard] },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'help', component: HelpComponent },
    { path: '**', component: OopsComponent }
];

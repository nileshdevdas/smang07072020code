import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TelevisionComponent } from './television/television.component';
import { TheatreComponent } from './theatre/theatre.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelpComponent } from './help/help.component';
import { OopsComponent } from './oops/oops.component';
import { AuthGuard } from './auth.guard';

export const routes = [
    { path: '', component: HomeComponent },
    { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] },
    { path: 'television', component: TelevisionComponent, canActivate: [AuthGuard] },
    { path: 'theatre', component: TheatreComponent, canActivate: [AuthGuard] },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'help', component: HelpComponent },
    { path: '**', component: OopsComponent }
];

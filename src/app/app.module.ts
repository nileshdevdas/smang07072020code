import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './root/root.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { TelevisionComponent } from './television/television.component';
import { TheatreComponent } from './theatre/theatre.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { OopsComponent } from './oops/oops.component';

// ----------------------------------------------------------- //
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
// ----------------------------------------------------------- //


// ----------------------------- for forms ----------------------//
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
// ----------------------------- for forms ---------------------//

@NgModule({
  declarations: [
    RootComponent,
    MovieslistComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    MoviesComponent,
    TelevisionComponent,
    TheatreComponent,
    AboutusComponent,
    HelpComponent,
    HomeComponent,
    OopsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}

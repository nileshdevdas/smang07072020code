import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
@NgModule({
  declarations: [
    HelloComponent,
    MovieslistComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }

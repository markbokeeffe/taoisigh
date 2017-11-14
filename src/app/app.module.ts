import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { TaoisighService } from './taoisigh.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaoisighService],
  bootstrap: [AppComponent]
})
export class AppModule { }

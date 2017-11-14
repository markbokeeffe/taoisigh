import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { TaoisighService } from './taoisigh.service';
import { TaoisighListComponent } from './taoisigh-list/taoisigh-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HeaderComponent,
    FooterComponent,
    TaoisighListComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [TaoisighService],
  bootstrap: [AppComponent]
})
export class AppModule { }

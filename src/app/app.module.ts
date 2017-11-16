import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatCheckboxModule, MatGridListModule, MatTableModule} from '@angular/material';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import { TaoisighService } from './taoisigh.service';
import { TaoisighListComponent } from './taoisigh-list/taoisigh-list.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ChronologyComponent } from './chronology/chronology.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HeaderComponent,
    FooterComponent,
    TaoisighListComponent,
    ProfilesComponent,
    ChronologyComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponentComponent
      },
      {
        path: 'home',
        component: HomeComponentComponent
      },
      {
        path: 'profiles',
        component: ProfilesComponent
      },
      {
        path: 'chronology',
        component: ChronologyComponent
      },
      {
        path: 'statistics',
        component: StatisticsComponent
      },
    ])
  ],
  providers: [TaoisighService, {provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

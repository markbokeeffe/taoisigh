import { Component } from '@angular/core';
import { Injectable }     from '@angular/core';
import { TaoisighService } from 'app/taoisigh.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public taoisigh: any;
  constructor(session:TaoisighService) {
    this.taoisigh = session.data;
    console.log('taoisigh');
    console.log(this.taoisigh);
  }
}

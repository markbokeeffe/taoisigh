import { Component, OnInit } from '@angular/core';
import { Injectable }     from '@angular/core';
import { TaoisighService } from 'app/taoisigh.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  public taoisigh: any;
  constructor(session:TaoisighService) {
    this.taoisigh = session.data;
    console.log('taoisigh');
    console.log(this.taoisigh);
  }

  ngOnInit() {
  }

}

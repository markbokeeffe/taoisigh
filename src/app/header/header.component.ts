import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  screens = [
    {
      name:'Profiles',
      path: 'profiles'
    },
    {
      name:'Chronology',
      path: 'chronology'
    },
    {
      name:'Statistics',
      path: 'statistics'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

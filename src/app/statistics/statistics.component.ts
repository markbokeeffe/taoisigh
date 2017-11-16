import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { TaoisighService } from 'app/taoisigh.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  displayedColumns = ['position', 'name'];
  dataSource = new ExampleDataSource();

  public taoisigh: any;
  public dataNew: any;
  constructor(session:TaoisighService) {
    this.taoisigh = session.data;
    console.log('taoisigh');
    console.log(this.taoisigh);
  }

  ngOnInit() {
  }

}

export class TableBasicExample {
  displayedColumns = ['name', 'placeOfBirth'];
  dataSource = new ExampleDataSource();
}

export interface Element {
  name: string;
  placeOfBirth: string;
}

const data: Element[] = [
  {name: 'Hydrogen', placeOfBirth: 'Dublin'},
  {name: 'Helium', placeOfBirth: 'Dublin'},
  {name: 'Lithium', placeOfBirth: 'Dublin'},
  {name: 'Beryllium', placeOfBirth: 'Dublin'},
  {name: 'Boron', placeOfBirth: 'Dublin'},
  {name: 'Carbon', placeOfBirth: 'Dublin'},
  {name: 'Nitrogen', placeOfBirth: 'Dublin'},
  {name: 'Oxygen', placeOfBirth: 'Dublin'},
  {name: 'Fluorine', placeOfBirth: 'Dublin'},
  {name: 'Neon', placeOfBirth: 'Dublin'},
  {name: 'Sodium', placeOfBirth: 'Dublin'},
  {name: 'Magnesium', placeOfBirth: 'Dublin'},
  {name: 'Aluminum', placeOfBirth: 'Dublin'},
  {name: 'Silicon', placeOfBirth: 'Dublin'},
  {name: 'Phosphorus', placeOfBirth: 'Dublin'},
  {name: 'Sulfur', placeOfBirth: 'Dublin'},
  {name: 'Chlorine', placeOfBirth: 'Dublin'},
  {name: 'Argon', placeOfBirth: 'Dublin'},
  {name: 'Potassium', placeOfBirth: 'Dublin'},
  {name: 'Calcium', placeOfBirth: 'Dublin'},
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}

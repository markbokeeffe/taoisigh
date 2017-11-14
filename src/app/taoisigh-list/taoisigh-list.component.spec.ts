import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoisighListComponent } from './taoisigh-list.component';

describe('TaoisighListComponent', () => {
  let component: TaoisighListComponent;
  let fixture: ComponentFixture<TaoisighListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoisighListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoisighListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

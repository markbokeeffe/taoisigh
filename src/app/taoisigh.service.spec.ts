import { TestBed, inject } from '@angular/core/testing';

import { TaoisighService } from './taoisigh.service';

describe('TaoisighService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaoisighService]
    });
  });

  it('should be created', inject([TaoisighService], (service: TaoisighService) => {
    expect(service).toBeTruthy();
  }));
});

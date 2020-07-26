import { TestBed } from '@angular/core/testing';

import { BaralhoService } from './baralho.service';

describe('BaralhoService', () => {
  let service: BaralhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaralhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

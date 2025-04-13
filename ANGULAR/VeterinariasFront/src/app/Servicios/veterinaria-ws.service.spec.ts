import { TestBed } from '@angular/core/testing';

import { VeterinariaWSService } from './veterinaria-ws.service';

describe('VeterinariaWSService', () => {
  let service: VeterinariaWSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterinariaWSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

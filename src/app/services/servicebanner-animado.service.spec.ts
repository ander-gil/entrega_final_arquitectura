import { TestBed } from '@angular/core/testing';

import { ServicebannerAnimadoService } from './servicebanner-animado.service';

describe('ServicebannerAnimadoService', () => {
  let service: ServicebannerAnimadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicebannerAnimadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

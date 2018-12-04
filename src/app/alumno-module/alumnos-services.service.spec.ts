import { TestBed, inject } from '@angular/core/testing';

import { AlumnosServicesService } from './alumnos-services.service';

describe('AlumnosServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlumnosServicesService]
    });
  });

  it('should be created', inject([AlumnosServicesService], (service: AlumnosServicesService) => {
    expect(service).toBeTruthy();
  }));
});

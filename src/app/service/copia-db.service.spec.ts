import { TestBed } from '@angular/core/testing';

import { CopiaDBService } from './copia-db.service';

describe('CopiaDBService', () => {
  let service: CopiaDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopiaDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

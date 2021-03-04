import { TestBed } from '@angular/core/testing';

import { AlbumeService } from './albume.service';

describe('AlbumeService', () => {
  let service: AlbumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

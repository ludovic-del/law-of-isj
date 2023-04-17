import { TestBed } from '@angular/core/testing';

import { CodeProceService } from './code-proce.service';

describe('CodeProceService', () => {
  let service: CodeProceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeProceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CodePenalService } from './code-penal.service';

describe('CodePenalService', () => {
  let service: CodePenalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodePenalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

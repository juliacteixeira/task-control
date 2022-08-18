import { TestBed } from '@angular/core/testing';

import { TaskControlService } from './task-control.service';

describe('TaskControlService', () => {
  let service: TaskControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

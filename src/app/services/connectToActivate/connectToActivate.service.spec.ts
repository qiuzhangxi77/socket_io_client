/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConnectToActivateService } from './connectToActivate.service';

describe('Service: ConnectToActivate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectToActivateService]
    });
  });

  it('should ...', inject([ConnectToActivateService], (service: ConnectToActivateService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckListItemsService } from './check-list-items.service';

describe('CheckListItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckListItemsService]
    });
  });

  it('should ...', inject([CheckListItemsService], (service: CheckListItemsService) => {
    expect(service).toBeTruthy();
  }));
});

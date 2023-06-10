import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routerguardGuard } from './routerguard.guard';

describe('routerguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routerguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

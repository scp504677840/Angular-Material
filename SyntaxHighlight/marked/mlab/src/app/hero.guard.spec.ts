import { TestBed, async, inject } from '@angular/core/testing';

import { HeroGuard } from './hero.guard';

describe('HeroGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroGuard]
    });
  });

  it('should ...', inject([HeroGuard], (guard: HeroGuard) => {
    expect(guard).toBeTruthy();
  }));
});

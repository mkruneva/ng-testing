import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComponent } from './ex-2-like.component';

describe('Ex 2 Like Component', () => {
  let component: LikeComponent;

  beforeEach(async(() => {
    component = new LikeComponent();
  }));

  it('should create Like Component', () => {
    expect(component).toBeTruthy();
  });
});

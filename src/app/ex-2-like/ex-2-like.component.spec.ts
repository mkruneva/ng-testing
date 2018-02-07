import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComponent } from './ex-2-like.component';

fdescribe('Ex 2 Like Component', () => {
  let component: LikeComponent;

  beforeEach(async(() => {
    component = new LikeComponent();
  }));

  it('should create Like Component', () => {
    expect(component).toBeTruthy();
  });

  it('should set iLke to be false before clicked', () => {
    expect(component.iLike).toBe(false);
  });

  it('should change iLke to be true when clicked', () => {
    component.click();

    expect(component.iLike).toBe(true);
  });

  it('should increase the number of votes when clicked', () => {
    component.totalLikes = null;
    component.click();

    expect(component.totalLikes).toBe(1);
  });

  it('should increase the number of votes when clicked', () => {
    component.totalLikes = 5;
    component.iLike = true;
    component.click();

    expect(component.totalLikes).toBe(4);
  })
});

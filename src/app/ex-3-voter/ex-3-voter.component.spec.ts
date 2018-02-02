import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterComponent } from './ex-3-voter.component';

describe('Ex3 Voter Component', () => {
  let component: VoterComponent;

  beforeEach(async(() => {
    component = new VoterComponent();
  }));

  it('should create Voter Component', () => {
    expect(component).toBeTruthy();
  });
});

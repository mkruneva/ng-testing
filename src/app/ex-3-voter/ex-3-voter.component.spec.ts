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

  it('should calculate total votes properly', () => {
    component.myVote = 1;
    component.othersVote = 2;
    expect(component.totalVotes).toBe(3);
  });

  it('should set myVote to be one when upvoted', () => {
    component.myVote = null;

    component.upVote();

    expect(component.myVote).toBe(1);
  });

  it('should not change myVote value when upvotet if it is one', () => {
    component.myVote = 1;

    component.upVote();

    expect(component.myVote).toBe(1);
  });

  it('should set myVote to be minus one when upvoted', () => {
    component.myVote = null;

    component.downVote();

    expect(component.myVote).toBe(-1);
  });

  it('should not change myVote value whn downvoted if it is minus one', () => {
    component.myVote = -1;

    component.downVote();

    expect(component.myVote).toBe(-1);
  });

  it('should return the total number of votes', () => {
    component.othersVote = 5;
    component.myVote = null;

    component.downVote();

    expect(component.totalVotes).toBe(4);
  });

  it('should raise an event when upvoted', () => {
    let eventData = null;
    component.myVoteChanged.subscribe(v => eventData = v);

    component.upVote();

    expect(eventData).toEqual({ myVote: 1});
  });

  it('should NOT raise an event if I have already submitted a positive vote', () => {
    component.myVote = 1;
    let eventData = null;
    component.myVoteChanged.subscribe(v => eventData = v);

    component.upVote();

    expect(eventData).toBeNull();
  });

  it('should raise an event when downvoted', () => {
    let eventData = null;
    component.myVoteChanged.subscribe(v => eventData = v);

    component.downVote();

    expect(eventData).toEqual({ myVote: -1});
  });

  it('should raise an event when downvoted', () => {
    component.myVote = -1;
    let eventData = null;
    component.myVoteChanged.subscribe(v => eventData = v);

    component.downVote();

    expect(eventData).toBeNull();
  });
});


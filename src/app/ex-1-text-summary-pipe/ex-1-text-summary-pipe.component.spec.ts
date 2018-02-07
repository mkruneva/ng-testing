
import { TextSummaryPipe } from './ex-1-text-summary-pipe.component';

describe('TextSummaryPipe Component', () => {
  let component: TextSummaryPipe;

  beforeEach(() => {
    component = new TextSummaryPipe();
  });

  it('should create TextSummaryPipe Component', () => {
    expect(component).toBeTruthy();
  });

  it('should return an empty string if input is null', () => {
    expect (component.transform(null)).toEqual('');
  });

  it('should return null if input is undefined', () => {
    expect (component.transform(undefined)).toEqual('');
  });

  it('should return string with 10 characters if word longer than 10', () => {
    expect(component.transform('1234567890123456')).toBe('1234567890...');
  });

  it('should return string with the exact number of characters if requested', () => {
    expect(component.transform('123456', 2)).toBe('12...');
  });

  it('should return the input word if shorter than 10 chars', () => {
    expect(component.transform('1234')).toBe('1234');
  });
});

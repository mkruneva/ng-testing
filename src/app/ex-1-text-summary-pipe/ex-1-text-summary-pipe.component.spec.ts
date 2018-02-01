
import { TextSummaryPipe } from './ex-1-text-summary-pipe.component';

describe('TextSummaryPipe Component', () => {
  let component: TextSummaryPipe;

  beforeEach(() => {
    component = new TextSummaryPipe();
  });

  it('should create TextSummaryPipe Component', () => {
    expect(component).toBeTruthy();
  });
});

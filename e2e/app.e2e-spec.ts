import { MoshtestsPage } from './app.po';

describe('moshtests App', () => {
  let page: MoshtestsPage;

  beforeEach(() => {
    page = new MoshtestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

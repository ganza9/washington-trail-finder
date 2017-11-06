import { WashingtonTrailFinderPage } from './app.po';

describe('washington-trail-finder App', () => {
  let page: WashingtonTrailFinderPage;

  beforeEach(() => {
    page = new WashingtonTrailFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

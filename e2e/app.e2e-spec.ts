import { PbPage } from './app.po';

describe('pb App', function() {
  let page: PbPage;

  beforeEach(() => {
    page = new PbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

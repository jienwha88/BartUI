import { BartuiPage } from './app.po';

describe('bartui App', () => {
  let page: BartuiPage;

  beforeEach(() => {
    page = new BartuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { GajaPage } from './app.po';

describe('gaja App', () => {
  let page: GajaPage;

  beforeEach(() => {
    page = new GajaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

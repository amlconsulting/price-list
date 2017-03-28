import { PriceListPage } from './app.po';

describe('price-list App', () => {
  let page: PriceListPage;

  beforeEach(() => {
    page = new PriceListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

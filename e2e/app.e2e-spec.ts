import { Angular2AdminLTEPage } from './app.po';

describe('angular2-admin-lte App', function() {
  let page: Angular2AdminLTEPage;

  beforeEach(() => {
    page = new Angular2AdminLTEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

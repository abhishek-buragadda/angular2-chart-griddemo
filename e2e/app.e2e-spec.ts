import { AngularGridDemoPage } from './app.po';

describe('angular-grid-demo App', () => {
  let page: AngularGridDemoPage;

  beforeEach(() => {
    page = new AngularGridDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

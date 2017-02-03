import { ResponsiveTemplatePage } from './app.po';

describe('responsive-template App', function() {
  let page: ResponsiveTemplatePage;

  beforeEach(() => {
    page = new ResponsiveTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

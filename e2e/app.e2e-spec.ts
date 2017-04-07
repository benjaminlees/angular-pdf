import { PdfPage } from './app.po';

describe('pdf App', () => {
  let page: PdfPage;

  beforeEach(() => {
    page = new PdfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

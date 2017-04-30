import { MyAngular2AccordionPage } from './app.po';

describe('my-angular2-accordion App', () => {
  let page: MyAngular2AccordionPage;

  beforeEach(() => {
    page = new MyAngular2AccordionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { BeepRogerPage } from './app.po';

describe('beep-roger App', function() {
  let page: BeepRogerPage;

  beforeEach(() => {
    page = new BeepRogerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

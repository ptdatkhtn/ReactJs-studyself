import { OnTapInputOutputPage } from './app.po';

describe('on-tap-input-output App', () => {
  let page: OnTapInputOutputPage;

  beforeEach(() => {
    page = new OnTapInputOutputPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Main App Content');
  });

  it('should start with 1 point', () => {
    page.navigateTo();
    expect(page.getPoints()).toEqual('1');
  });

  it('should increase 1 point by clicking the plus1 button', () => {
    page.navigateTo();
    expect(page.getPoints()).toEqual('1');
    page.getPlus1Button().click();
    expect(page.getPoints()).toEqual('2');
    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();
    expect(page.getPoints()).toEqual('5');
  });

  it('should reset point by clicking the reset button', () => {
    page.navigateTo();
    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();
    expect(page.getPoints()).toEqual('4');
    page.getResetButton().click();
    expect(page.getPoints()).toEqual('0');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});

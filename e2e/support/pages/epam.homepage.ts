import { browser, protractor, element, by } from 'protractor';
import {EpamComponent} from '../components/epam.components';
import {EpamSolutionPage} from '../pages/epam.solutionPage';
let epamComponent: EpamComponent;
export class EpamHomePage {
  static title = 'EPAM | Software Product Development Services';
  static openPage() : any {
    browser.get('https://www.epam.com/');
  };
  static goToSolutionsPage(){
  	browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('.popup-menu li a[href$="solutions"]'))),15000);
    return element(by.css('.popup-menu li a[href$="solutions"]')).click();
  };
  static goToIdeasPage(){
  	browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('.popup-menu li a[href$="ideas"]'))),15000);
  	return element(by.css('.popup-menu li a[href$="ideas"]')).click(); 
  };
  static goToIndustriesPage(){
  	browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('.popup-menu li a[href$="industries"]'))),15000);
  	return element(by.css('.popup-menu li a[href$="industries"]')).click();
  };
  static goToCareerPage(){
  	browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('.popup-menu li a[href$="careers"]'))),15000);
  	return element(by.css('.popup-menu li a[href$="careers"]')).click();
  };
  static goToContactPage(){
  	browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('.popup-menu li a[href$="contact"]'))),15000);
  	return element(by.css('.popup-menu li a[href$="contact"]')).click();
  }
}
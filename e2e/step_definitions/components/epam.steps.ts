import {browser, protractor} from 'protractor';
import {EpamComponent} from '../../support/components/epam.components';
import {EpamHomePage} from '../../support/pages/epam.homePage';
import {EpamSolutionPage} from '../../support/pages/epam.solutionPage';
import {EpamCareerPage} from '../../support/pages/epam.careerPage';
import {EpamIdeasPage} from '../../support/pages/epam.ideasPage';
import {EpamIndustriesPage} from '../../support/pages/epam.industriesPage';
import {EpamContactPage} from '../../support/pages/epam.contactPage';
export  = function() {
    let chai = require('chai').use(require('chai-as-promised'));
    let expect = chai.expect;
    let epamComponent: EpamComponent;

    this.Before(() => {
        epamComponent = new EpamComponent();
    });

    this.Given(/^I am on epam homepage$/, () => {
        return  EpamHomePage.openPage();;
    });

    this.Then(/^I go to Career page$/, () => {
        EpamHomePage.goToCareerPage();
        return expect(browser.getTitle()).to.eventually.equal(EpamCareerPage.title);
    });

    this.Then(/^I go to Ideas page$/, () => {
        EpamHomePage.goToIdeasPage();
        return expect(browser.getTitle()).to.eventually.equal(EpamIdeasPage.title);
    });

    this.Then(/^I go to Solutions page$/, () => {
        EpamHomePage.goToSolutionsPage();
        return expect(browser.getTitle()).to.eventually.equal(EpamSolutionPage.title);
    });

    this.Then(/^I go to Industries page$/, () => {
        EpamHomePage.goToIndustriesPage();
        return expect(browser.getTitle()).to.eventually.equal(EpamIndustriesPage.title);
    });

    this.Then(/^I go to Contacts page$/, () => {
        EpamHomePage.goToContactPage();
        return expect(browser.getTitle()).to.eventually.equal(EpamContactPage.title);
    });

    this.Then(/^I search for javascript in search$/, () => {
        epamComponent.searchButtonMenuItem.click();
        epamComponent.searchInput.sendKeys("JavaScript");
        browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.autocompleteField), 15000);
        expect((epamComponent.autocompleteField).getText()).to.eventually.equal("javascript");
        epamComponent.searchButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.serchHeader), 15000);
        return expect((epamComponent.serchHeader).getText()).to.eventually.have.string('We found');
    });
}
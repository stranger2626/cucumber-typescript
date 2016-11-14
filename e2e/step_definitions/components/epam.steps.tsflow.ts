"use strict"
import {protractor, browser} from "protractor";
import {EpamComponent} from '../../support/components/epam.components';
import {EpamHomePage} from '../../support/pages/epam.homePage';
import {EpamSolutionPage} from '../../support/pages/epam.solutionPage';
import {EpamCareerPage} from '../../support/pages/epam.careerPage';
import {EpamIdeasPage} from '../../support/pages/epam.ideasPage';
import {EpamIndustriesPage} from '../../support/pages/epam.industriesPage';
import {EpamContactPage} from '../../support/pages/epam.contactPage';
import { binding, given, when, before,then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let  epamComponent: EpamComponent;




@binding()
class IndexPageSteps {
	@before()
    public beforeAllScenarios(): void {
	epamComponent = new EpamComponent();
	};

	@given(/^I am on epam homepage tsflow$/)
		private loadHomePage(callback: CallbackStepDefinition){
			EpamHomePage.openPage();
			callback();
		};

	@then(/^I go to Career page tsflow$/)
		private goToCareerPage(callback: CallbackStepDefinition){
			EpamHomePage.goToCareerPage();
			expect(browser.getTitle()).to.eventually.equal(EpamCareerPage.title);
			callback();
		};

	@then(/^I go to Ideas page tsflow$/)
		private goToIdeasPage(callback: CallbackStepDefinition){
			EpamHomePage.goToIdeasPage();
			expect(browser.getTitle()).to.eventually.equal(EpamIdeasPage.title);
			callback();
		};

	@then(/^I go to Solutions page tsflow$/)
		private goToSolutionsPage(callback: CallbackStepDefinition){
			EpamHomePage.goToSolutionsPage();
			expect(browser.getTitle()).to.eventually.equal(EpamSolutionPage.title);
			callback();
		};

	@then(/^I go to Industries page tsflow$/)
		private goToIndustriesPag(callback: CallbackStepDefinition){
			EpamHomePage.goToIndustriesPage();
			expect(browser.getTitle()).to.eventually.equal(EpamIndustriesPage.title);
			callback();
		};

	@then(/^I go to Contacts page tsflow$/)
		private goToContactsPage(callback: CallbackStepDefinition){
			EpamHomePage.goToContactPage();
			expect(browser.getTitle()).to.eventually.equal(EpamContactPage.title);
			callback();
		};

	@then(/^I search for javascript in search tsflow$/)
		private searchForJavascript(callback: CallbackStepDefinition){
			epamComponent.searchButtonMenuItem.click();
	        epamComponent.searchInput.sendKeys("JavaScript");
	        browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.autocompleteField), 15000);
	        expect((epamComponent.autocompleteField).getText()).to.eventually.equal("javascript");
	        epamComponent.searchButton.click();
	        browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.serchHeader), 15000);
	        expect((epamComponent.serchHeader).getText()).to.eventually.have.string('We found');
			callback();
		};
}
export = IndexPageSteps;
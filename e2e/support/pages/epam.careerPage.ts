import { browser, element, by } from 'protractor';
import {EpamHomePage} from './epam.homePage';

export class EpamCareerPage {
  static title = 'Careers';
  searchInput = element(by.css('.search-group input'));
  static setCareer(careerTitle: string){
  };
}
// import Page from './page';

//import Page from './page';

//module.exports = require('./page');

class CultureTripPage  {
  /**
  * define elements
  */

  get searchInput()   { return browser.element('#yschsp'); }
  get searchButton()  { return browser.element('a.wishlists-link__StyledWishlistText-s136l42e-0.heSvbe'); }
  get resultsList()   { return browser.element('#results'); }

  /**
   * define or overwrite page methods
   */

  open () {
      browser.url(path)
      //super.open('http://theculturetrip.com')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  enterText (item) {
    this.searchInput.clearElement();
    this.searchInput.setValue(item);
  }

  search () {
    this.searchButton.click();
    browser.pause(3000);
  }
  isSearched () {
    this.resultsList.waitForVisible(1000);
    return this.resultsList.isVisible();
  }


  open () {
    browser.url(path)
    //super.open('http://theculturetrip.com')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
    browser.pause(1000);
}

isSearched () {
  this.resultsList.waitForVisible(1000);
  return this.resultsList.isVisible();
}

isSearched () {
  this.resultsList.waitForVisible(1000);
  return this.resultsList.isVisible();
}

open () {
  browser.url(path)
  //super.open('http://theculturetrip.com')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
  browser.pause(1000);
}

isSearched () {
this.resultsList.waitForVisible(1000);
return this.resultsList.isVisible();
}


  export default class Page {
    open (path) {
      browser.url(path)
    }
  }

  export default class Page {
    open (path) {
      browser.url(path)
    }
  }

}

//export default new CultureTripPage();
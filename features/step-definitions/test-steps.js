let {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    Given('I navigate to Google', () => {
      browser.url('http://theculturetrip.com')
    });

    When('I search for Formula 1', () => {
        const elem = $('a.wishlists-link__StyledWishlistText-s136l42e-0.heSvbe');
        elem.click();
        
      //browser.setValue('#search', 'Formula 1');
      //browser.pause(5000);
    });
});
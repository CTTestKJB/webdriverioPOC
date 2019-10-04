import cultureTripPage from '../pageobject/culturetrip-search.page';

let {defineSupportCode} = require('cucumber');
// require('babel-register')({
//   presets: ['env']
// });
var currentDir = process.currentDir;
// console.log("dir", currentDir);
//module.exports = require('../pageobject/culturetrip-search.page');
// var cultureTripPage = new CultureTripPage();
// import cultureTripPage from '../pageobject/culturetrip-search.page';
defineSupportCode(function({Given, When, Then}) {

    Given('I navigate to Google', () => {
      //browser.url('http://theculturetrip.com')
      cultureTripPage.open();
    });

    When('I search for Formula 1', () => {
        cultureTripPage.search();
        //var elem = $('a.wishlists-link__StyledWishlistText-s136l42e-0.heSvbe');

        
      //browser.setValue('#search', 'Formula 1');
      //browser.pause(5000);
    });
});

defineSupportCode(function({Given, When, Then}) {

  Given('I navigate to Google', () => {
    //browser.url('http://theculturetrip.com')
    cultureTripPage.open();
  });

  When('I search for Formula 1', () => {
      cultureTripPage.search();
      //var elem = $('a.wishlists-link__StyledWishlistText-s136l42e-0.heSvbe');

      
    //browser.setValue('#search', 'Formula 1');
    //browser.pause(5000);
  });
});
master 1

master 2

master 3


  tests1

  tests2

  tests3

  tests4

  tests5

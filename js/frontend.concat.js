'use strict';

var frontend = {
  // init, like a constructor
  init: function() {
    mobileNav();
  }
};

var mobileNav = function() {
  var navigation = $('.js-navMobile'),
      trigger = $('.js-navTrigger');

  trigger.on('click', function() {
    $('body').toggleClass('hasNavOpen');
  });
};

$(frontend.init());

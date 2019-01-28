var mobileNav = function() {
  var navigation = $('.js-navMobile'),
      trigger = $('.js-navTrigger');

  trigger.on('click', function() {
    $('body').toggleClass('hasNavOpen');
  });
};

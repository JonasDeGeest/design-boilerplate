'use strict';

var jsMobileNav = {
  navigation: $('.js-nav'),
  trigger: $('.js-nav-trigger'),

  init: function () {
    jsMobileNav.initDependencies();
  },

  initDependencies: function () {
    jsMobileNav.trigger.on('click', function () {
      jsMobileNav.toggleNavigation();
    });
  },

  toggleNavigation: function () {
    jsMobileNav.navigation.toggleClass('is-visible');
    jsMobileNav.trigger.toggleClass('is-active');
  }
};

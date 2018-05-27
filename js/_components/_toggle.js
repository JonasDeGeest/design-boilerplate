'use strict';

var jsToggle = {
  showHideToggle: $('.js-show-hide'),

  init: function () {
    jsToggle.initDependencies();
  },

  initDependencies: function () {
    jsToggle.showHideToggle.on('click', function () {
      var trigger = $(this);
      jsToggle.showHide(trigger.data('target-selector'));
      trigger.toggleClass('is-toggled');
    });
  },

  showHide: function (targets) {
    $(targets).toggleClass('is-hidden');
  }
};

'use strict';

var jsHide = {
  hide: $('.js-hide'),

  init: function () {
    jsHide.initDependencies();
  },

  initDependencies: function () {
    jsHide.hide.on('click', function () {
      $(this).closest(jsHide.hide).parent().addClass('is-hidden');
    });
  }
};

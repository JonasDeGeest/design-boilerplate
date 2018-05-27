'use strict';

var chopstick = {
  // init, something like a constructor
  initDependencies: function () {
    chopstick.loadObject(jsMobileNav, 'jsMobileNav');
    chopstick.loadObject(jsHide, 'jsHide');
    chopstick.loadObject(jsToggle, 'jsToggle');
  },

  /**
   * This function will load an object by a given name
   *
   * If the object doesn't exist no error will be thrown
   * But if object exists but doesn't have an init method it will throw an error
   *
   * If everything is ok we'll initiate the given object
   */
  loadObject: function (obj, name) {
    // create object based on a name
    // var objName = window[objName];

    // check if object exists
    if (typeof obj !== 'undefined') {
      // check if object has a method init
      if (typeof obj.init === 'undefined') {
        // we will throw an error so the designer / developer know there's a problem
        throw new Error('ERROR: "' + name + '" does not have an init function');
      } else {
      // everything is fine so initiate
        obj.init();
      }
    }
  }
};

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

$(chopstick.initDependencies());

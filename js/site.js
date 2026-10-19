(function () {
  'use strict';

  var EDITIONS = {
    COM: { lang: 'en', apps: 'com' },
    RU:  { lang: 'ru', apps: 'ru', abroad: 'com' }
  };

  window.SITE = EDITIONS[window.EDITION] || EDITIONS.COM;
}());

(function () {
  'use strict';

  var EDITIONS = {
    COM: { lang: 'en' },
    RU:  { lang: 'ru' }
  };

  window.SITE = EDITIONS[window.EDITION] || EDITIONS.COM;
}());

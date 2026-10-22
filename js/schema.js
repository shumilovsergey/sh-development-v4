const SCHEMA = {
  nav: [
    { id: 'about' },
    { id: 'stack' },
    { id: 'projects' },
    { id: 'career' }
  ],

  contacts: [
    { id: 'telegram', icon: 'telegram', href: 'https://t.me/sergey_showmelove' },
    { id: 'mail',     icon: 'mail',     action: 'copy', copy: 'wumilovsergey@gmail.com' },
    { id: 'github',   icon: 'github',   href: 'https://github.com/shumilovsergey' },
    { id: 'cv',       icon: 'cv' }
  ],

  stats: [
    { id: 'servers',   value: 150 },
    { id: 'apps',      value: 27 },
    { id: 'sites',     value: 22 }
  ],

  stack: {
    items: [
      { id: 'monitoring' },
      { id: 'semaphore' },
      { id: 'pki' },
      { id: 'youtrack' },
      { id: 'bitrix' },
      { id: 'openvas' },
      { id: 'ptaf' },
      { id: 'thesis' },
      { id: 'gitea' },
      { id: 'smallstep' },
      { id: 'multifactor' },
      { id: 'stormwall' },
      { id: 'rudesktop' },
      { id: 'keycloak' },
      { id: 'express' },
      { id: 'vault' },
      { id: 'usergate' },
      { id: 'r7' }
    ]
  },

  projects: {
    items: [
      { id: 'dev-infra',    tier: 'platform', icon: 'platform' },

      { id: 'menu',         tier: 'app' },
      { id: 'nom-nom',      tier: 'app' },
      { id: 'wgetbash',     tier: 'app' },
      { id: 'blur',         tier: 'app' },
      { id: 'qcode',        tier: 'app' },

      { id: 'auth-center',  tier: 'auth' },
      { id: 'auth-miniapp', tier: 'auth' }
    ],

    urls: {
      menu: {
        ru:  'https://menu.sh-development.ru',
        com: 'https://menu.sh-development.com'
      },
      'nom-nom': {
        ru:  'https://nom-nom.sh-development.ru',
        com: 'https://nom-nom.sh-development.com'
      },
      wgetbash: {
        ru:  'https://wgetbash.sh-development.ru',
        com: 'https://wgetbash.sh-development.com'
      },
      blur: {
        ru:  'https://blur.sh-development.ru',
        com: 'https://blur.sh-development.com'
      },
      qcode: {
        ru:  'https://qcode.sh-development.ru',
        com: 'https://qcode.sh-development.com'
      },
      'auth-miniapp': {
        com: 'https://t.me/sh_devment_bot'
      }
    },

    edges: [
      ['dev-infra', 'menu'],
      ['dev-infra', 'nom-nom'],
      ['dev-infra', 'wgetbash'],
      ['dev-infra', 'blur'],
      ['dev-infra', 'qcode'],

      ['menu',      'auth-center'],
      ['nom-nom',   'auth-center'],
      ['wgetbash',  'auth-center'],
      ['blur',      'auth-center'],
      ['qcode',     'auth-center'],

      ['auth-center', 'auth-miniapp', 'both']
    ]
  },

  career: {
    items: [
      { id: 'expoforum' },

      { id: 'gamesport',
        links: [
          { name: 'GameSport', href: 'https://gamesport.com/ru' },
          { name: 'Unitpay',   href: 'https://unitpay.ru/' }
        ] },

      { id: 'honka',
        links: [{ name: 'Honka', href: 'https://honka.ru/' }] },

      { id: 'fitnesshouse',
        links: [{ name: 'Fitness House', href: 'https://www.fitnesshouse.ru/' }] }
    ]
  }
};

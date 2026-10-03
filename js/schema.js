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
      { id: 'wget-bash',    tier: 'app' },
      { id: 'qcode',        tier: 'app' },
      { id: 'blur',         tier: 'app' },

      { id: 'auth-center',  tier: 'auth' },
      { id: 'auth-miniapp', tier: 'auth' }
    ],

    edges: [
      ['dev-infra', 'menu'],
      ['dev-infra', 'nom-nom'],
      ['dev-infra', 'wget-bash'],
      ['dev-infra', 'qcode'],
      ['dev-infra', 'blur'],

      ['menu',      'auth-center'],
      ['nom-nom',   'auth-center'],
      ['wget-bash', 'auth-center'],
      ['qcode',     'auth-center'],
      ['blur',      'auth-center'],

      ['auth-center', 'auth-miniapp', 'both']
    ]
  },

  career: {
    items: [
      { id: 'expoforum',
        stack: ['Linux', 'Proxmox', 'Bash', 'Python', 'Go', 'Java'] },

      { id: 'gamesport',
        links: [
          { name: 'GameSport', href: 'https://gamesport.com/ru' },
          { name: 'Unitpay',   href: 'https://unitpay.ru/' }
        ],
        stack: ['Proxmox', 'FreeIPA', 'Ansible', 'Terraform', 'Docker',
                'GitLab CI', 'Prometheus', 'Grafana'] },

      { id: 'honka',
        links: [{ name: 'Honka', href: 'https://honka.ru/' }],
        stack: ['Windows Server', 'Active Directory', 'MikroTik', '1С',
                'Hikvision', 'Bolid'] },

      { id: 'fitnesshouse',
        links: [{ name: 'Fitness House', href: 'https://www.fitnesshouse.ru/' }],
        stack: ['Windows', 'DHCP', 'DNS', 'СКС', 'Bolid', 'PERCo'] }
    ]
  }
};

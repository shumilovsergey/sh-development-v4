const SCHEMA = {
  nav: [
    { id: 'about',    ready: true },
    { id: 'stack',    ready: true },
    { id: 'projects', ready: true },
    { id: 'career',   ready: true }
  ],

  contacts: [
    { id: 'telegram', icon: 'telegram', href: '#' },
    { id: 'mail',     icon: 'mail',     href: 'mailto:wumilovsergey@gmail.com' },
    { id: 'github',   icon: 'github',   href: '#' },
    { id: 'cv',       icon: 'cv',       action: 'print' }
  ],

  stats: [
    { id: 'servers',   value: 150 },
    { id: 'apps',      value: 27 },
    { id: 'sites',     value: 22 },
    { id: 'articles',  value: 70 },
    { id: 'tools',     value: 20, suffix: '+' },
    { id: 'postmortem', value: 15 }
  ],

  stack: {
    items: [
      { id: 'monitoring',  icon: 'monitoring',
        stack: ['Grafana', 'Thanos', 'Prometheus', 'Loki', 'Ansible'] },
      { id: 'semaphore',   icon: 'semaphore',
        stack: ['Ansible', 'Semaphore UI'] },
      { id: 'isp',         icon: 'isp',
        stack: ['PHP', 'MySQL', 'WordPress', 'Prometheus', 'Loki'] },
      { id: 'ptaf',        icon: 'ptaf',
        stack: ['Kubernetes', 'IMAP', 'Telegram Bot API'] },
      { id: 'thesis',      icon: 'thesis',
        stack: ['Java (CUBA)', 'MySQL', 'Elasticsearch', 'Kerberos'] },
      { id: 'r7',          icon: 'r7',
        stack: ['Java', 'PostgreSQL', 'repmgr', 'LDAPS'] },
      { id: 'rudesktop',   icon: 'rudesktop',
        stack: ['PXE', 'DHCP', 'TFTP', 'HTTP'] },
      { id: 'smallstep',   icon: 'smallstep',
        stack: ['PKI', 'CRL'] },
      { id: 'stepca',      icon: 'stepca',
        stack: ['step-ca', 'SSH-сертификаты', '2FA'] },
      { id: 'stormwall',   icon: 'stormwall',
        stack: ['SaaS', 'firewall', 'Prometheus exporter'] },
      { id: 'usergate',    icon: 'usergate',
        stack: ['firewall'] },
      { id: 'multifactor', icon: 'multifactor',
        stack: ['TOTP', 'LDAP-адаптеры'] },
      { id: 'express',     icon: 'express',
        stack: ['self-hosted мессенджер', 'Smart Apps', 'боты'] },
      { id: 'gitea',       icon: 'gitea',
        stack: ['Gitea Workflows', 'Go', 'Python'] },
      { id: 'gitlab',      icon: 'gitlab',
        stack: ['GitLab CI'] },
      { id: 'vault',       icon: 'vault',
        stack: ['secret manager'] },
      { id: 'ntfy',        icon: 'ntfy',
        stack: ['webhook', 'Grafana'] },
      { id: 'youtrack',    icon: 'youtrack',
        stack: ['YouTrack', 'Knowledge Base'] }
    ]
  },

  projects: {
    stack: ['Go 1.23', 'SQLite', 'Docker', 'SSO', 'Prometheus', 'self-hosted'],

    items: [
      { id: 'homelab',     tier: 'platform',
        stack: ['Docker', 'Prometheus', 'Grafana', 'CI / CD'] },

      { id: 'menu',        tier: 'app', stack: ['Go', 'SQLite', 'Docker'] },
      { id: 'nom-nom',     tier: 'app', stack: ['Go', 'SQLite', 'Docker'] },
      { id: 'wget-bash',   tier: 'app', stack: ['Go', 'Bash', 'Docker'] },
      { id: 'qcode',       tier: 'app', stack: ['Go', 'SQLite', 'Docker'] },
      { id: 'blur',        tier: 'app', stack: ['Go', 'SQLite', 'Docker'] },

      { id: 'auth-center', tier: 'auth', stack: ['Go', 'Docker', 'Telegram'] },
      { id: 'auth-proxy',  tier: 'auth', stack: ['Go', 'Docker', 'Telegram'] }
    ],

    edges: [
      ['homelab', 'menu'],
      ['homelab', 'nom-nom'],
      ['homelab', 'wget-bash'],
      ['homelab', 'qcode'],
      ['homelab', 'blur'],

      ['menu',      'auth-center'],
      ['nom-nom',   'auth-center'],
      ['wget-bash', 'auth-center'],
      ['qcode',     'auth-center'],
      ['blur',      'auth-center'],

      ['auth-center', 'auth-proxy', 'both']
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

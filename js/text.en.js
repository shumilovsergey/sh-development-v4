const EN = {
  meta: {
    title: 'sh-development',
    description: 'Sergey Shumilov — DevOps / Software Engineer'
  },

  lang: { label: 'EN', code: 'en' },

  ui: {
    sections: 'Sections',
    language: 'Interface language',
    close: 'Close'
  },

  person: {
    name: 'Sergey Shumilov',
    role: 'DevOps / Software Engineer'
  },

  contacts: {
    telegram: 'Telegram',
    mail: 'Email',
    github: 'GitHub',
    cv: 'CV as PDF'
  },

  nav: {
    about:    'About',
    stack:    'Stack',
    projects: 'Projects',
    career:   'Career'
  },

  about: {
    stats: {
      servers:    { label: 'servers',      note: 'Linux infrastructure' },
      apps:       { label: 'applications', note: 'from WAF and PKI to ECM and messaging' },
      sites:      { label: 'sites',        note: 'PHP | Go | Python' },
      articles:   { label: 'articles',     note: 'documentation' },
      tools:      { label: 'tools',        note: 'my own codebase' },
      postmortem: { label: 'postmortems',  note: 'incident and attack analysis' }
    }
  },

  stack: {
    common: {
      title: 'Work common to every system',
      lede: 'Tasks across these systems overlap a lot — rather than repeat ' +
        'the same list on every card, the shared part lives here.',
      items: [
        'install, deploy, update, troubleshooting',
        'code review',
        'talking to vendors, negotiating better terms',
        'automated dev → prod deployment',
        'writing everything down in the knowledge base',
        'monitoring and alerting',
        'database tuning and backups',
        'postmortems after attacks',
        'LDAPS authentication, LDAP adapters for 2FA',
        'nftables management, access segmentation',
        'UI administration'
      ]
    },

    items: {
      monitoring: { title: 'Monitoring' },
      thesis:     { title: 'TEZIS' },
      r7:         { title: 'R7-Office' },
      youtrack:   { title: 'YouTrack / knowledge base' }
    }
  },

  projects: {
    title: 'An ecosystem of my own',
    lede:
      'A small set of services I use to solve my own problems and, along the ' +
      'way, to experiment with architecture, infrastructure and Go.',

    common: {
      title: 'How it works',
      lede: 'The pet projects grew out of work tasks: whatever was missing, I wrote. ' +
        'They are built to one pattern, so a new service goes up in an evening.',
      items: [
        'Go 1.23 with no frameworks, SQLite next to the binary.',
        'A Dockerfile and two compose files per project: dev and prod.',
        'Everything runs on my own homelab: shared test rig, monitoring and CI/CD.',
        'One way in through auth-center — the session travels between apps.',
        'Menu as the entry point: it links the services and watches their health.',
        'Prometheus metrics wherever there is something worth watching.'
      ]
    },

    items: {
      homelab:       { lines: ['testing', 'monitoring', 'CI / CD'] },
      menu:          { short: 'entry point' },
      'nom-nom':     { short: 'food and recipes' },
      'wget-bash':   { short: 'scripts at hand' },
      qcode:         { short: 'QR codes' },
      blur:          { short: 'audio player' },
      'auth-center': { short: 'single sign-on' },
      'auth-proxy':  { short: 'bridge to Telegram' }
    }
  },

  career: {
    title: 'My path in engineering',
    lede:
      'Over these years the role shifted from keeping systems running ' +
      'to designing them.',

    traits: [
      {
        title: 'I take on the tangled ones',
        text: 'The tasks first-line support or the system administrators could not close.'
      },
      {
        title: 'I automate the repeats',
        text: 'If something has to be done by hand a second time, I start thinking about a tool.'
      },
      {
        title: 'I leave the system clearer',
        text: 'Documentation, reproducible configs and procedures a less experienced colleague can follow.'
      },
      {
        title: 'I connect the teams',
        text: 'Development, information security and the network administrators.'
      }
    ],

    common: {
      title: 'My role on the team',
      lede: 'Described not as a list of duties but as what I was actually useful for, ' +
        'it looked like this.',
      items: [
        'The link between developers, information security and network administrators.',
        'The tasks first-line support or the system administrators could not close.',
        'Writing decisions down so that next time a less experienced colleague closes the task.',
        'Bringing in new services and practices: less manual work, less human error.',
        'A developer background — I can build a small, narrow tool when a finished product is missing one important detail.',
        'Most of the infrastructure is offline, hence the experience with packages, dependencies and building from source.'
      ]
    },

    items: {
      expoforum: {
        stage: 'DevOps / Infrastructure',
        mark: 'now',
        span: 'now',
        role: 'Infrastructure Administration Engineer',
        company: 'Expoforum',
        period: '— present'
      },

      gamesport: {
        stage: 'Senior Administrator',
        mark: '2024',
        span: '2024 — …',
        role: 'Senior System Administrator',
        company: 'GameSport · Unitpay',
        period: 'December 2024 — '
      },

      honka: {
        stage: 'System Administrator',
        mark: '2022',
        span: '2022 — 2024',
        role: 'System Administrator',
        company: 'Honka',
        period: 'February 2022 — December 2024'
      },

      fitnesshouse: {
        stage: 'Support',
        mark: '2020',
        span: '2020 — 2021',
        role: 'Technical Support Engineer',
        company: 'Fitness House',
        period: 'May 2020 — July 2021'
      }
    }
  }
};

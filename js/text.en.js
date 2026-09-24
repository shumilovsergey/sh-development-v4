const EN = {
  meta: {
    title: 'sh',
    description: 'Sergey Shumilov — DevOps / Software Engineer'
  },

  lang: { label: 'EN', code: 'en' },

  ui: {
    sections: 'Sections',
    switchLang: 'Switch to Russian',
    close: 'Close',
    copyMail: 'Copy email address',
    copied: 'Address copied',
    copyFail: 'Could not copy — address below'
  },

  person: {
    name: 'Sergey Shumilov',
    role: 'DevOps / Software Engineer'
  },

  contacts: {
    telegram: 'Telegram',
    mail: 'Email',
    github: 'GitHub',
    cv: 'CV in PDF'
  },

  nav: {
    about:    'About',
    stack:    'Stack',
    projects: 'Projects',
    career:   'Career'
  },

  about: {
    stats: {
      servers: { label: 'servers', note: 'docker pve k8s' },
      apps: { label: 'applications', note: 'waf pki ci-cd' },
      sites: { label: 'sites', note: 'java go python' },
      articles: { label: 'articles', note: 'documentation' },
      tools: { label: 'repositories', note: 'codebase' },
      postmortem: { label: 'postmortems', note: 'incident reviews' }
    }
  },

  stack: {
    common: {
      title: 'Work Principles',
      lede: '',
      items: [
        'Automation over manual operations',
        'Critical services are redundant, critical data is backed up',
        'The authentication chain matters more than password complexity',
        'Zero trust — everything not explicitly required stays closed',
        'Secrets are rotated — backups are tested',
        'Knowledge belongs in the knowledge base, not in one person\'s head'
      ]
    },

    items: {
      monitoring: {
        title: 'Monitoring',
        details: [
          'Clean migration from Zabbix to Grafana, Prometheus, Thanos, Loki',
          'Long-term metric storage with Thanos',
          'Exporter deployment via Ansible',
          'A system of dynamic dashboards covering the whole Linux + Windows fleet',
          'Alerting without the noise of false positives',
          'Clean and readable notifications in messengers'
        ]
      },

      semaphore: {
        title: 'Semaphore / Ansible',
        details: [
          'Made Ansible the way infrastructure is managed, not just another tool',
          'Separated admin permissions through Semaphore UI',
          'Continuously maintain the role and playbook library',
          'Added infrastructure versioning through Gitea',
          'Changes became transparent — who changed what and when'
        ]
      },

      isp: {
        title: 'ISPmanager',
        details: [
          '40 PHP/WordPress sites and two development teams',
          'Fine-tuned caching',
          'Many sites on one server — one slow site drags down the rest',
          'Custom dashboard based on Prometheus metrics and Loki logs',
          'Wrote a usage guide — downtime dropped several times over'
        ]
      },

      ptaf: {
        title: 'PTAF',
        details: [
          'Deployment and support of an application running in Kubernetes',
          'Traffic analysis and attack protection',
          'Network routing configuration',
          'Built an exporter for metrics, alerts and visualizations'
        ]
      },

      thesis: {
        title: 'Thesis DMS',
        details: [
          'Deployment and support of a Java application',
          'Elasticsearch integration improved search performance',
          'R7 Office integration for collaborative document editing',
          'Kerberos and SSO integration for authentication',
          'Built an exporter for task scheduler monitoring',
          'Built a utility to automatically capture memory dumps on application failure',
          'Introduced hard-link backups, which cut storage usage'
        ]
      },

      r7: {
        title: 'R7 Office',
        details: [
          'Deployment and support of a .NET application',
          'Distributed the application across 7 servers for fault tolerance',
          'Migrated the database to a PostgreSQL cluster with automatic leader failover',
          'Built an LDAPS synchronization module with nested group permission inheritance',
          'Rehearsed recovery scenarios for deleted documents'
        ]
      },

      rudesktop: {
        title: 'RuDesktop',
        details: [
          'Deployment and support of a Python application',
          'Automated Windows network installation',
          'Ansible controller for managing the Windows fleet',
          'Implemented two network installation scenarios — PXE and WinBoot',
          'Automated answers to installation prompts',
          'Domain policy distribution',
          'Automated RuDesktop agent deployment for remote user support'
        ]
      },

      smallstep: {
        title: 'Smallstep',
        details: [
          'Deployment and support of a Go application',
          'Integrated Smallstep into the existing PKI system',
          'Replaced static SSH keys with certificates',
          'Preserved the admin permission model during the migration to certificates',
          'Set up auditing and logging of admin actions',
          'Added 2FA to SSH access'
        ]
      },

      pki: {
        title: 'PKI',
        details: [
          'Offline Root Certificate Authority',
          'Intermediate Certificate Authorities',
          'Issuing Certificate Authorities',
          'Certificate Revocation List publication',
          'Automatic issuance of short-lived client certificates',
          'Repository of templates and configurations for all PKI entities'
        ]
      },

      stormwall: {
        title: 'StormWall',
        details: [
          'External perimeter firewall support',
          'Routing configuration and DNS management',
          'External traffic balancing between services',
          'DDoS attack protection',
          'Built an exporter to monitor traffic and RPS across different network segments'
        ]
      },

      usergate: {
        title: 'UserGate',
        details: [
          'Internal perimeter firewall support',
          'Access rules and routing configuration',
          'Traffic analysis between network segments',
          'Network connectivity troubleshooting'
        ]
      },

      multifactor: {
        title: 'MultiFactor',
        details: [
          'Centralized 2FA for all internal services',
          'Adapter integration and support',
          'Real client IP tracking',
          'Different authentication flows for the internal and external perimeter'
        ]
      },

      express: {
        title: 'Express',
        details: [
          'Deployment and support of a Docker Compose application',
          'Messenger support for 700 daily users',
          'MS Outlook integration',
          'Video conference scheduling through the calendar',
          'Built bots for alerts and service notifications'
        ]
      },

      gitea: {
        title: 'Gitea',
        details: [
          'Automated application deployment through Gitea Actions',
          'Version control for Ansible and service configurations',
          'Repositories for internal projects',
          'A culture of short and meaningful README.md files'
        ]
      },

      keycloak: {
        title: 'Keycloak',
        details: [
          'Central authentication hub for internal services',
          'MultiFactor integration for 2FA',
          'LDAPS integration',
          'Kerberos integration',
          'Realm structure based on security policies'
        ]
      },

      vault: {
        title: 'Vault',
        details: [
          'Single point for secrets across pipelines, services and employees',
          'Knowledge base integration — links to secrets instead of secrets themselves',
          'Zero trust — access to secrets without exposing them in plain text',
          'Centralized secret rotation'
        ]
      },

      bitrix: {
        title: 'Bitrix24',
        details: [
          'Deployment and support of a PHP application',
          'Introduced a site template system',
          'Set up multilingual support',
          'Automated deployment — developers do not need server access',
          'Separated Dev and Prod environments',
          'Set up failover to a standby instance with minimal downtime'
        ]
      },

      youtrack: {
        title: 'Knowledge Base',
        details: [
          'Documentation is as much a part of infrastructure as code and configs',
          'The entire environment should be documented',
          '.md keeps documentation simple and consistent',
          'Technical accuracy should not come at the cost of clarity',
          'If a word can be removed without losing meaning — it is unnecessary'
        ]
      }
    }
  },


// ------- Projects -------

  projects: {
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

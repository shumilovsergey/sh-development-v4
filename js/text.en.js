const EN = {
  meta: {
    title: 'sh',
    description: 'Sergey Shumilov - DevOps / Software Engineer'
  },

  lang: { label: 'EN', code: 'en' },

  ui: {
    sections: 'Sections',
    switchLang: 'Switch to Russian',
    close: 'Close',
    copyMail: 'Copy email address',
    copied: 'Address copied',
    copyFail: 'Could not copy - address below',
    about: 'About'
  },

  person: {
    name: 'Sergey Shumilov',
    role: 'DevOps / Software Engineer'
  },

  contacts: {
    telegram: 'Telegram',
    mail: 'Email',
    github: 'GitHub',
    cv: 'CV (PDF)'
  },

  nav: {
    about:    'About',
    stack:    'Stack',
    projects: 'Projects',
    career:   'Career'
  },

  about: {
    stats: {
      servers: { label: 'servers', note: 'pve docker k8s' },
      apps: { label: 'applications', note: 'prod dev ci-cd' },
      sites: { label: 'sites', note: 'java go python' }
    }
  },

  stack: {
    common: {
      title: 'Work Principles',
      items: [
        'Automation over manual operations',
        'Critical services are redundant, critical data is backed up',
        'The authentication chain matters more than password complexity',
        'Zero trust - everything not explicitly required stays closed',
        'Secrets are rotated - backups are tested',
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
          'Clean, readable notifications to messengers'
        ]
      },

      semaphore: {
        title: 'Ansible',
        details: [
          'Made Ansible the way infrastructure is managed, not just another tool',
          'Role-based admin access through Semaphore UI',
          'Keep the library of roles and playbooks up to date',
          'Put the infrastructure under version control in Gitea',
          'Every change is traceable - who changed what, and when'
        ]
      },

      openvas: {
        title: 'OpenVAS',
        details: [
          'PCI DSS certification',
          'Vulnerability detection and remediation',
          'Regular infrastructure security assessments'
        ]
      },

      ptaf: {
        title: 'PTAF',
        details: [
          'Deployment and support of the application in Kubernetes',
          'Traffic analysis and attack protection',
          'Network routing configuration',
          'Built an exporter for metrics, alerts and dashboards'
        ]
      },

      thesis: {
        title: 'Thesis DMS',
        details: [
          'Deployment and support of a Java application',
          'Elasticsearch integration made search faster',
          'R7 Office integration for collaborative document editing',
          'Kerberos and SSO integration for authentication',
          'Built an exporter to monitor task schedulers',
          'Built a tool that captures a memory dump automatically when the application crashes',
          'Introduced hard-link backups, cutting storage usage'
        ]
      },

      r7: {
        title: 'R7 Office',
        details: [
          'Deployment and support of a .NET application',
          'Distributed the application across 7 servers for fault tolerance',
          'Migrated the database to a PostgreSQL cluster with automatic leader failover',
          'Built an LDAPS synchronization module with nested group permission inheritance',
          'Tested recovery procedures for deleted documents'
        ]
      },

      rudesktop: {
        title: 'RuDesktop',
        details: [
          'Deployment and support of a Python application',
          'Automated Windows network installation',
          'Ansible controller for managing the Windows fleet',
          'Implemented two network installation scenarios - PXE and WinBoot',
          'Unattended answers to installer prompts',
          'Group Policy rollout',
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
          'Offline root certificate authority',
          'Intermediate certificate authorities',
          'Issuing certificate authorities',
          'Certificate revocation list (CRL) publishing',
          'Automatic issuance of short-lived client certificates',
          'A repository of templates and configs for all of the above'
        ]
      },

      stormwall: {
        title: 'StormWall',
        details: [
          'External perimeter firewall support',
          'Routing configuration and DNS management',
          'Load balancing of external traffic across services',
          'DDoS mitigation',
          'Built an exporter to monitor traffic and RPS across network segments'
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
          'Separate authentication flows for the internal and external perimeters'
        ]
      },

      express: {
        title: 'Express',
        details: [
          'Deployment and support of a Docker Compose application',
          'Running a messenger with 700 daily users',
          'MS Outlook integration',
          'Scheduling video calls from the calendar',
          'Built bots for alerts and service notifications'
        ]
      },

      gitea: {
        title: 'Gitea',
        details: [
          'Automated application deployment through Gitea Actions',
          'Version control for Ansible and service configurations',
          'Repositories for internal projects',
          'A culture of short, meaningful READMEs'
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
          'A single source of secrets for pipelines, services and people',
          'Knowledge base integration - it stores links to secrets, not the secrets',
          'Zero trust - access to secrets without exposing them in plain text',
          'Centralized secret rotation'
        ]
      },

      bitrix: {
        title: 'Bitrix24',
        details: [
          'Deployment and support of a PHP application',
          'Introduced a site template system',
          'Set up multilingual support',
          'Automated deployment - developers don\'t need server access',
          'Separated Dev and Prod environments',
          'Set up failover to a standby instance with minimal downtime'
        ]
      },

      youtrack: {
        title: 'Knowledge Base',
        details: [
          'Documentation is as much a part of infrastructure as code and configs',
          'The entire environment should be documented',
          'Markdown keeps documentation simple and consistent',
          'Technical accuracy should not come at the cost of clarity',
          'If a word can go without losing meaning, it should go'
        ]
      }
    }
  },


// ------- Projects -------

  projects: {
    tiers: {
      platform: 'Platform',
      app:      'Services',
      auth:     'Single sign-on'
    },

    items: {
      'dev-infra': {
        summary: 'Isolated infrastructure for development and testing',
        details: [
          'CI/CD - build, test, deploy',
          'Hypervisor, network, backups',
          'Internal services'
        ]
      },
      menu: {
        summary: 'A single entry point to the ecosystem',
        details: [
          'SSO across apps',
          'Information hub',
          'Quick access to every service'
        ]
      },
      'nom-nom': {
        summary: 'A calorie and weight tracker',
        details: [
          'Daily progress stats',
          'Calorie tracking per dish',
          'AI food analysis from a photo'
        ]
      },
      'wget-bash': {
        summary: 'A home for your bash scripts',
        details: [
          'One-click delivery to a server',
          'Groups and fast search across scripts',
          'Built-in log viewer'
        ]
      },
      blur: {
        summary: 'A player for long-form audio - audiobooks, podcasts and lectures',
        details: [
          'Precise seeking - type in the exact time',
          'Remembers where you left off',
          'Autoplay can be turned off'
        ]
      },
      qcode: {
        summary: 'An editor for beautiful QR codes',
        details: [
          'Built-in AI',
          'Plenty of settings to tweak',
          'It\'s free!'
        ]
      },
      'auth-center': {
        summary: 'Central authentication service',
        details: [
          'Stateless - simple by design',
          'Verifies both people and applications',
          'Zero trust between services',
          'Sign-in with Google, Telegram and Solana'
        ]
      },
      'auth-miniapp': {
        summary: 'Hands the user\'s Telegram session over to auth-center',
        details: ['Seamless sign-in']
      }
    }
  },

  career: {
    items: {
      expoforum: {
        stage: 'DevOps',
        mark: 'now',
        role: 'Infrastructure Administration Engineer',
        company: 'Expoforum',
        period: '- present'
      },

      gamesport: {
        stage: 'Senior System\nAdministrator',
        mark: '2024',
        role: 'Senior System Administrator',
        company: 'Unitpay',
        period: 'December 2024 - '
      },

      honka: {
        stage: 'System Administrator',
        mark: '2022',
        role: 'System Administrator',
        company: 'Honka',
        period: 'February 2022 - December 2024'
      },

      fitnesshouse: {
        stage: 'Support',
        mark: '2020',
        role: 'Technical Support Engineer',
        company: 'Fitness House',
        period: 'May 2020 - July 2021'
      }
    }
  }
};

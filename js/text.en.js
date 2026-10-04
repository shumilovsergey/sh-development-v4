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
          'Clean and readable notifications in messengers'
        ]
      },

      semaphore: {
        title: 'Ansible',
        details: [
          'Made Ansible the way infrastructure is managed, not just another tool',
          'Separated admin permissions through Semaphore UI',
          'Continuously maintain the role and playbook library',
          'Added infrastructure versioning through Gitea',
          'Changes became transparent - who changed what and when'
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
          'Implemented two network installation scenarios - PXE and WinBoot',
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
          'Knowledge base integration - links to secrets instead of secrets themselves',
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
          'Automated deployment - developers do not need server access',
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
          'If a word can be removed without losing meaning - it is unnecessary'
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
          'CI/CD - build, testing and deploy',
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
        summary: 'A calorie and weight tracker.',
        details: [
          'Daily progress stats',
          'Calorie tracking per dish',
          'AI food analysis from a photo'
        ]
      },
      'wget-bash': {
        summary: 'Storage for bash scripts.',
        details: [
          'One-click delivery to a server',
          'Groups and fast search across scripts',
          'Built-in log viewer'
        ]
      },
      qcode: {
        summary: 'An editor for creating beautiful QR codes.',
        details: [
          'AI integration built in',
          'A huge range of parameters you can tweak',
          'It\'s free!'
        ]
      },
      blur: {
        summary: 'A player for long audio - books, podcasts and lectures.',
        details: [
          'Pick the playback time easily from the keyboard',
          'Remembers where you stopped, even after the app is closed',
          'Autoplay can be turned off so the player stops on its own'
        ]
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

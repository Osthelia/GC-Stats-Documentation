import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';

// Once the API exposes its spec publicly, set OPENAPI_SPEC_URL (e.g. to
// https://gc-stats.app/api/openapi.json) and the plugin will fetch it over
// HTTP on every `gen-api-docs` run instead of reading the local copy.
const OPENAPI_SPEC_PATH = process.env.OPENAPI_SPEC_URL ?? 'openapi/gc-stats.json';

const config: Config = {
  title: 'GC Stats',
  tagline: 'GC Stats Documentation',
  favicon: 'img/favicon.svg',

  url: 'https://docs.gc-stats.app',
  baseUrl: '/',

  organizationName: 'gc-stats',
  projectName: 'gc-stats-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      fr: {
        label: 'Français',
      },
    },
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          docItemComponent: '@theme/ApiItem',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          gcstats: {
            specPath: OPENAPI_SPEC_PATH,
            outputDir: 'docs/api/reference',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig: {
    api: {
      authPersistance: 'localStorage',
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    image: 'img/gc-stats-social-card.svg',

    navbar: {
      title: 'GC Stats',
      logo: {
        alt: 'GC Stats',
        src: 'img/favicon.svg',
      },
      items: [
        {to: '/dashboard/overview', label: 'Dashboard', position: 'left'},
        {to: '/api/overview', label: 'API', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://gc-stats.app',
          label: 'gc-stats.app ↗',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Dashboard', to: '/dashboard/overview'},
            {label: 'API', to: '/api/overview'},
          ],
        },
        {
          title: 'GC Stats',
          items: [
            {label: 'Site', href: 'https://gc-stats.app'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} GC Stats by <a href="https://osthelia.org/">Osthelia</a>`,
    },

    prism: {
      theme: {
        plain: {
          color: '#16171a',
          backgroundColor: '#f0f0f2',
        },
        styles: [],
      },
      darkTheme: {
        plain: {
          color: '#f2f2f2',
          backgroundColor: '#161616',
        },
        styles: [],
      },
    },
  },
};

export default config;

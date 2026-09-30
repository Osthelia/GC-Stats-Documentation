import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import apiSidebar from './docs/api/reference/sidebar';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Dashboard',
      link: {type: 'doc', id: 'dashboard/overview'},
      items: [
        'dashboard/overview',
        'dashboard/profile',
        'dashboard/members',
        'dashboard/access',
        'dashboard/roles-permissions',
        'dashboard/news',
        'dashboard/credits',
        'dashboard/streams-and-vods',
        'dashboard/author-space',
        'dashboard/api-keys',
      ],
    },
    {
      type: 'category',
      label: 'API',
      link: {type: 'doc', id: 'api/overview'},
      items: [
        'api/overview',
        'api/authentication',
        'api/api-keys',
        'api/errors',
        {
          type: 'category',
          label: 'Reference',
          items: apiSidebar,
        },
      ],
    },
  ],
};

export default sidebars;

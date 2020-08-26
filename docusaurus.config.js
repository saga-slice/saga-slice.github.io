module.exports = {
  title: 'Saga Slice',
  tagline: 'Redux should not be so complicated',
  url: 'https://saga-slice.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'damusix', // Usually your GitHub org/user name.
  projectName: 'saga-slice', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Saga Slice',
      logo: {
        alt: 'Saga Slice',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/helpers/getting-started',
          activeBasePath: 'docs',
          label: 'Helpers',
          position: 'left',
        },
        {
          href: 'https://github.com/damusix/saga-slice',
          label: 'Github',
          position: 'right',
        },
        {
          href: 'https://github.com/damusix/saga-slice-helpers',
          label: 'Github Helpers',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Philosophy',
              to: 'docs/philosophy',
            },
            {
              label: 'API',
              to: 'docs/api/create-module',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Danilo Alonso. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'intro_getting_started',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

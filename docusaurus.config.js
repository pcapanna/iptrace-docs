module.exports = {
  title: 'IP Trace Docs',
  tagline: 'Documentation for IP Trace [Backend Challenge] Api Rest services',
  url: 'https://ip-trace-docs.herokuapp.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.svg',
  organizationName: 'ml', // Usually your GitHub org/user name.
  projectName: 'iptrace-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'IP Trace',
      logo: {
        alt: 'IPTrace Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'api/',
          activeBasePath: 'api',
          label: 'API',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          // Label of the section of these links
          title: 'Code Repositories',
          items: [
            {
              label: 'Api Rest',
              href: 'https://github.com/pcapanna/ml-iptrace',
            },
            {
              label: 'Documentation',
              href: 'https://github.com/pcapanna/iptrace-docs',
            }
          ],
        }],
      copyright: `Copyright © ${new Date().getFullYear()} Patricio Capanna.`,
    },
  },
  plugins: [
    ["docusaurus-plugin-openapi", {
      openapiPath: require.resolve("./openapi.json"),
    }]
  ],
  presets: [
    ['@docusaurus/preset-classic', {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};

module.exports = {
  title: 'Trace IP Docs',
  tagline: 'Documentacion Api Rest de IP Trace Challange Backend',
  url: 'https://ip-trace-docs.herokuapp.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
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
      ],
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

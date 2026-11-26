// @ts-check
const config = {
  title: 'Garage Tech Lab',
  tagline: 'Learn electricity. Understand your machines. Build with sensors and software.',
  url: 'https://weichtg3.github.io',
  baseUrl: '/garage-tech-lab/',
  organizationName: 'weichtg3',
  projectName: 'garage-tech-lab',
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },
  presets: [['classic', {
    docs: { sidebarPath: require.resolve('./sidebars.js'), routeBasePath: 'learn' },
    blog: false,
    theme: { customCss: require.resolve('./src/css/custom.css') },
  }]],
  themeConfig: {
    navbar: { title: 'Garage Tech Lab', items: [
      { to: '/learn/overview', label: 'Course', position: 'left' },
      { to: '/learn/labs/overview', label: 'Garage Labs', position: 'left' },
      { to: '/learn/reference/safety', label: 'Safety', position: 'left' },
      { href: 'https://github.com/weichtg3/garage-tech-lab', label: 'GitHub', position: 'right' }
    ] },
    footer: { style: 'dark', links: [{title:'Explore',items:[{label:'Curriculum',to:'/learn/overview'},{label:'Electrical calculator',to:'/tools'}]},{title:'Project',items:[{label:'Source on GitHub',href:'https://github.com/weichtg3/garage-tech-lab'}]}],copyright:'Garage Tech Lab — learn safely, verify vehicle specifications.' },
    colorMode: { defaultMode: 'dark', disableSwitch: false, respectPrefersColorScheme: true },
    docs: { sidebar: { hideable: true } },
  },
};
module.exports = config;

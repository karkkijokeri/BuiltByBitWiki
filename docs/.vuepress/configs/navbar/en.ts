import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guides',
    children: [
      {
        text: 'General Guide',
        link: '/guide/general-guide.md',
      },
      {
        text: 'Expertise Guides',
        children: [
          {
            text: 'Sys.Admin Guides',
            link: '/guide/system-administrator/',
          },
          {
            text: 'Management Guides',
            link: '/guide/management/',
          },
        ]
      },
    ]
  },
]
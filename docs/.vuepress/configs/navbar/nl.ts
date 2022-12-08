import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarNl: NavbarConfig = [
  {
    text: 'Handleidingen',
    children: [
      {
        text: 'Algemene Handleiding',
        link: '/nl/guide/general-guide.md',
      },
      {
        text: 'Expertise Handleidingen',
        children: [
          {
            text: 'Sys.Admin Handleidingen',
            link: '/nl/guide/system-administrator/',
          },
          {
            text: 'Management Handleidingen',
            link: '/nl/guide/management/',
          },
          {
            text: 'Hosting Handleidingen',
            link: '/nl/guide/hosting/',
          },
        ]
      },
    ]
  },
]
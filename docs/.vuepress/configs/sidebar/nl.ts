import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarNl: SidebarConfig = {
    '/nl/guide/': [
        {
            text: 'Guide',
            children: [
                '/guide/README.md',
            ],
        },
    ],
}
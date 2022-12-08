import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
    '/guide/': [
        {
            text: 'General Guides',
            children: [
                '/guide/general-guide.md',
            ],
        },
        {
            text: 'Expertise Guides',
            children: [
                {
                    text: 'Sys Administrator Guides',
                    children: [
                        '/guide/system-administrator/README.md',
                    ],
                },
                {
                    text: 'Management Guides',
                    children: [
                        '/guide/management/README.md',
                    ],
                },
                {
                    text: 'Hosting Company Guides',
                    children: [
                        '/guide/hosting/README.md',
                    ],
                },
            ]
        },
        
    ],
}
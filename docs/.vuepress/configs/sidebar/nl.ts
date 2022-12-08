import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarNl: SidebarConfig = {
    '/nl/guide/': [
        {
            text: 'Algemene Guides',
            children: [
                '/nl/guide/general-guide.md',
            ],
        },
        {
            text: 'Expertise Handleidingen',
            children: [
                {
                    text: 'Sys Administrator Handleidingen',
                    children: [
                        '/nl/guide/system-administrator/README.md',
                    ],
                },
                {
                    text: 'Management Handleidingen',
                    children: [
                        '/nl/guide/management/README.md',
                    ],
                },
                {
                    text: 'Hosting Bedrijf Handleidingen',
                    children: [
                        '/nl/guide/hosting/README.md',
                    ],
                },
            ]
        },
        
    ],
}
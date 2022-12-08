import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

import {
    head,
    navbarEn,
    navbarNl,
    sidebarEn,
    sidebarNl,
  } from './configs/index.js'

const isProd = process.env.NODE_ENV === 'production'


export default defineUserConfig({

    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US',
            title: 'BuiltByBit Community Wiki',
            description: 'The guide to becoming a BBB Freelancer!',
        },
        '/nl/': {
            lang: 'nl-NL',
            title: 'BuiltByBit Community Wiki',
            description: 'Een uitleg hoe je een BBB Zelfstandig Particulier wordt!',
        },
    },

    theme: defaultTheme({
        logo: '/img/BBB.png',
        repo: 'vuepress/vuepress-next',
        docsDir: 'docs',
    
        // theme-level locales config
        locales: {
          /**
           * English locale config
           *
           * As the default locale of @vuepress/theme-default is English,
           * we don't need to set all of the locale fields
           */
          '/': {
            // navbar
            navbar: navbarEn,
            // sidebar
            sidebar: sidebarEn,
            // page meta
            editLinkText: 'Edit this page on GitHub',
          },
    
          /**
           * Chinese locale config
           */
          '/nl/': {
            // navbar
            navbar: navbarNl,
            selectLanguageName: 'Dutch (Nederlands)',
            selectLanguageText: 'Selecteer Taal',
            selectLanguageAriaLabel: 'UwU',
            // sidebar
            sidebar: sidebarNl,
            // page meta
            editLinkText: 'Bewerk deze pagina op GitHub',
            lastUpdatedText: 'Laatst bijgewerkt',
            contributorsText: 'Bijdragers',
            // custom containers
            tip: 'Tip',
            warning: 'Waarschuwing',
            danger: 'Let op',
            // 404 page
            backToHome: 'Hoofdpagina',
            // a11y
            openInNewWindow: 'Open in nieuw venster',
            toggleColorMode: 'Verander kleur',
            toggleSidebar: 'Verander sidebar',
          },
        },
    
        themePlugins: {
          // only enable git plugin in production mode
          git: !isProd,
          // use shiki plugin in production mode instead
          prismjs: !isProd,
        },
      }),
})
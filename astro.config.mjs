// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeNova from 'starlight-theme-nova';

// https://astro.build/config
export default defineConfig({
  base: '/developer/docs/',
  integrations: [
    starlight({
      plugins: [starlightThemeNova()],
      title: {
        en: 'Docs',
        de: 'Docs'
      },
      lastUpdated: true,
      editLink: {
        baseUrl: 'https://github.com/realgolfgames/docs/tree/main'
      },
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en'
        },
        de: {
          label: 'Deutsch'
        }
      },
      favicon: 'logo.PNG',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/realgolfgames/docs'
        }
      ],
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: {
            directory: 'getting-started',
            collapsed: true
          }
        },
        {
          label: 'API Reference',
          autogenerate: { directory: 'api', collapsed: true }
        },
        {
          label: 'Packages',
          autogenerate: { directory: 'packages', collapsed: true }
        }
      ]
    })
  ]
});

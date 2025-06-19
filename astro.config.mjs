// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/developer/docs/',
  integrations: [
    starlight({
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
          translations: {
            de: 'Erste Schritte'
          },
          items: [
            {
              label: 'Introduction',
              translations: { de: 'Einleitung' },
              link: '/getting-started/introduction'
            }
          ]
        },
        {
          label: 'API',
          translations: {
            de: 'API'
          },
          items: [
            {
              label: 'Introduction',
              translations: { de: 'Einleitung' },
              link: '/api/introduction'
            }
          ]
        },
        {
          label: 'Types',
          translations: {
            de: 'Typen'
          },
          items: [
            {
              label: 'Introduction',
              translations: { de: 'Einleitung' },
              link: '/types/introduction'
            },
            {
              label: 'Blog',
              translations: { de: 'Blog' },
              link: '/types/blog'
            },
            {
              label: 'Course',
              translations: { de: 'Platz' },
              link: '/types/course'
            },
            {
              label: 'Game',
              translations: { de: 'Spiel' },
              link: '/types/game'
            },
            {
              label: 'Rule',
              translations: { de: 'Regel' },
              link: '/types/rule'
            }
          ]
        },
        {
          label: 'SDKs',
          items: [
            {
              label: 'Introduction',
              translations: { de: 'Einleitung' },
              link: '/sdks/introduction'
            }
          ]
        }
      ]
    })
  ]
});

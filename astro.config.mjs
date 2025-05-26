// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/developer/docs/',
  integrations: [
    starlight({
      title: 'RealGolf.Games Developer Docs',
      favicon: 'logo.PNG',
      sidebar: [
        {
          label: 'Types',
          items: [
            { label: 'Introduction', link: '/types/introduction' },
            { label: 'Blog', link: '/types/blog' },
            { label: 'Course', link: '/types/course' },
            { label: 'Game', link: '/types/game' },
            { label: 'Rule', link: '/types/rule' }
          ]
        }
      ]
    })
  ]
});

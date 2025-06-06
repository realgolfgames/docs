// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "/developer/docs/",
  integrations: [
    starlight({
      title: {
        en: "RealGolf.Games Developer Documentation",
        de: "RealGolf.Games Entwicklerdokumentation",
      },
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
          lang: "en",
        },
        de: {
          label: "Deutsch",
        },
      },
      favicon: "logo.PNG",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/realgolfgames/docs" }],
      sidebar: [
        {
          label: "Types",
          items: [
            { label: "Introduction", link: "/types/introduction" },
            { label: "Blog", link: "/types/blog" },
            { label: "Course", link: "/types/course" },
            { label: "Game", link: "/types/game" },
            { label: "Rule", link: "/types/rule" },
          ],
        },
      ],
    }),
  ],
});

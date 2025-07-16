// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightSidebarTopicsPlugin from "starlight-sidebar-topics";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightThemeNova(),
        starlightSidebarTopicsPlugin([
          {
            label: "RealGolf.Games",
            id: "realgolfgames",
            link: "/realgolfgames/getting-started/introduction",
            icon: "open-book",
            items: [
              {
                label: "Getting Started",
                autogenerate: {
                  directory: "realgolfgames/getting-started",
                  collapsed: true,
                },
              },
              {
                label: "API Reference",
                autogenerate: { directory: "realgolfgames/api", collapsed: true },
              },
              {
                label: "Packages",
                autogenerate: { directory: "realgolfgames/packages", collapsed: true },
              },
            ],
          },
          {
            label: "Swingalytica",
            id: "swingalytica",
            link: "/swingalytica/",
            icon: "laptop",
            items: [
              {
                label: "Getting Started",
                autogenerate: {
                  directory: "swingalytica/getting-started",
                  collapsed: true,
                },
              },
              {
                label: "API Reference",
                autogenerate: { directory: "swingalytica/api", collapsed: true },
              },
              {
                label: "Packages",
                autogenerate: { directory: "swingalytica/packages", collapsed: true },
              },
            ],
          },
        ]),
      ],
      title: {
        en: "Docs",
        de: "Docs",
      },
      lastUpdated: true,
      editLink: {
        baseUrl: "https://github.com/realgolfgames/docs/tree/main",
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
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/realgolfgames/docs",
        },
      ],
    }),
  ],
});

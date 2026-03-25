import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "noobj | Builder & Architect of Chaos",
  tagline: "Shipping code, breaking silos, questioning everything",
  favicon: "img/favicon.svg",

  url: "https://noobj.me",
  baseUrl: "/",

  organizationName: "noobg1",
  projectName: "me",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: [
            "./src/css/custom.css",
            "node_modules/katex/dist/katex.min.css",
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "noobj.me",
      items: [
        { to: "/blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      style: "light",
      links: [],
      copyright: `© ${new Date().getFullYear()} noobj.me — <a href="https://x.com/itsnoobj" target="_blank">X</a> · <a href="https://www.linkedin.com/in/jeevan-d-c/" target="_blank">LinkedIn</a> · <a href="https://github.com/noobg1" target="_blank">GitHub</a> <span style="opacity:0.4">(rarely active, mostly lurking)</span><br/><span style="opacity:0.35; font-size:0.85em">Opinions here are my own, not my employer's.</span>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

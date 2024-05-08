import { defineConfig, sharpImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare({ imageService: "compile" }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    react(),
  ],
});

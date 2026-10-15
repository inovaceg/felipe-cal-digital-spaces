import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import dyadTagger from "@dyad-sh/react-vite-component-tagger";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [dyadTagger()],
  },
});

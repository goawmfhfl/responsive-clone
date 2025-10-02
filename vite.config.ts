import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({
      // styled-components 디버깅(컴포넌트명 노출 등)
      babel: {
        plugins: [
          ["babel-plugin-styled-components", { displayName: true, pure: true }],
        ],
      },
    }),
  ],
  server: {
    port: 5173,
    open: true,
  },
});

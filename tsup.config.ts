import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  target: "es2022",
  format: ["cjs", "esm"],
  dts: true,
});

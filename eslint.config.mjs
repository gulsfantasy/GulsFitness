import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // This is the only one you need.
  // It automatically includes all the rules for Next.js, React, and TypeScript.
  ...compat.extends("next/core-web-vitals"),
];

export default eslintConfig;
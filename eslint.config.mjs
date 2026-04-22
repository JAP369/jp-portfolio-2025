import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Apostrophes in JSX text are intentional copy — demote to warn
      "react/no-unescaped-entities": "warn",
      // setMounted(true) in useEffect is the standard Next.js hydration guard
      "react-hooks/set-state-in-effect": "warn",
    },
  },
]);

export default eslintConfig;

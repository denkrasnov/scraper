/* eslint-disable no-underscore-dangle */
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import _import from "eslint-plugin-import";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tsEslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default tsEslint.config(
  {
    ignores: ["**/build/", "**/coverage/", ".vscode/*"]
  },
  ...fixupConfigRules(
    compat.extends(
      "prettier",
      "plugin:import/recommended",
      "plugin:import/typescript"
    )
  ),
  {
    plugins: {
      "@typescript-eslint": tsEslint.plugin,
      import: fixupPluginRules(_import)
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        window: true,
        define: true,
        require: true,
        module: true
      },

      parser: tsEslint.parser,
      ecmaVersion: 5,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      "import/resolver": {
        node: {
          extensions: [".mjs", ".js", ".ts", ".tsx"]
        },
        typescript: true
      }
    },
    files: ["**/*.mjs", "**/*.js", "**/*.ts", "**/*.tsx"],
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            ["sibling", "parent", "internal", "index", "unknown"]
          ],

          "newlines-between": "always"
        }
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
          js: "never"
        }
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true
        }
      ],
      "import/prefer-default-export": 0,
      "no-restricted-exports": "off",

      "no-unused-expressions": [
        "error",
        {
          allowTaggedTemplates: true
        }
      ],

      "no-console": "off"
    }
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-restricted-globals": "off",
      "no-shadow": "off",
      "space-infix-ops": "off",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "error"
    }
  }
);

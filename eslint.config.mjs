/* eslint-disable no-underscore-dangle */
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
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
      "airbnb",
      "prettier",
      "plugin:import/recommended",
      "plugin:import/typescript"
    )
  ),
  {
    plugins: {
      "@typescript-eslint": tsEslint.plugin,
      "react-hooks": fixupPluginRules(reactHooks),
      react: fixupPluginRules(react),
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
      "react/function-component-definition": [
        1,
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function"
        }
      ],

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

      "react/jsx-sort-props": ["error"],
      "react/button-has-type": 0,
      "import/prefer-default-export": 0,
      "no-restricted-exports": "off",
      "jsx-a11y/label-has-associated-control": [
        2,
        {
          assert: "either",
          depth: 3
        }
      ],

      "no-unused-expressions": [
        "error",
        {
          allowTaggedTemplates: true
        }
      ],
      "react/jsx-props-no-spreading": "off"
    }
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    rules: {
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "react/jsx-filename-extension": "off",
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-restricted-globals": "off",
      "no-shadow": "off",
      "space-infix-ops": "off",
      "react/prop-types": "off",
      "react/default-props-match-prop-types": "off",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "error"
    }
  }
);

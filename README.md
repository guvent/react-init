# React Boilerplate

### Init modules and start project development

```
yarn && yarn start
```

### Build static files

```
yarn build
```

### Tailwindcss watch

```
yarn twatch
```

### Manual check Eslint

```
yarn lint
```

### Manual check Eslint

```
yarn pretty
```

---

## Instruction

#### Init project;

```
yarn create react-app react-init --template typescript
```

#### Install typescript development plugins;

```
yarn add -D typescript @types/node @types/react @types/react-dom @types/jest

```

#### Install Tailwindcss;

```
yarn add -D tailwindcss
npx tailwindcss init

yarn add tailwindcss-animate class-variance-authority clsx tailwind-merge
```

#### Install Eslint Plugin;

```
yarn add -D eslint @types/eslint

npx eslint --init

yarn add -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript

npx eslint "src/*.tsx"
```

#### Install Prettier Plugin;

```
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks

touch .prettierrc
```

---

#### Configure VS Code;

-   On .vscode/settings.json

```
{
    // Editor formatter forced with the prettier plugin.
    "editor.defaultFormatter": "esbenp.prettier-vscode",

    // Prettier config file path.
    "prettier.configPath": ".prettierrc",

    // Put priority on the prettier before the eslint.
    "vs-code-prettier-eslint.prettierLast": true,

    // Format after each save modified on the file.
    "editor.formatOnSave": true,

    // Replace the tab indent with these 4 spaces.
    "editor.tabSize": 4
}
```

---

Good Luck :)

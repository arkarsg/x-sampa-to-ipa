# X-SAMPA to IPA Converter

## Overview

A utility package for converting X-SAMPA (Extended Speech Assessment Methods Phonetic Alphabet) notation into IPA (International Phonetic Alphabet) symbols. It includes features to handle ties in IPA notation, allowing for accurate and precise representation of phonetic symbols.

## Features

- **X-SAMPA to IPA Conversion**: Convert standard X-SAMPA notation into IPA symbols with ease.
- **Tie Handling**: Supports the tying of symbols in IPA, ensuring correct phonetic representation.

## Usage

```javascript
import { toIpa } from 'x-sampa-to-ipa'

const xSampa = 'dZQb'
const ipa = toIpa(xsampa)
```

#### This will give: 'd͡ʒɒb'

Unlike one-to-one translation between X-SAMPA and IPA, `x-sampa-to-ipa` recognises ties.

---

## Development

It uses npm, TypeScript compiler, Jest, webpack, ESLint, Prettier, husky, pinst, commitlint. The production files include CommonJS, ES Modules, UMD version and TypeScript declaration files.

<p align="center">
<a href="https://github.com/" title="Github"><img src="https://github.com/get-icon/geticon/raw/master/icons/github-icon.svg" alt="Github" width="21px" height="21px"></a> <a href="https://code.visualstudio.com/" title="Visual Studio Code"><img src="https://github.com/get-icon/geticon/raw/master/icons/visual-studio-code.svg" alt="Visual Studio Code" width="21px" height="21px"></a> <a href="https://www.microsoft.com/windows" title="Windows"><img src="https://github.com/get-icon/geticon/raw/master/icons/microsoft-windows.svg" alt="Windows" width="21px" height="21px"></a> <a href="https://www.apple.com/macos/" title="Mac OS"><img src="https://github.com/get-icon/geticon/raw/master/icons/macOS.svg" alt="Mac OS" width="21px" height="21px"></a> <a href="https://www.linuxfoundation.org/" title="Linux"><img src="https://github.com/get-icon/geticon/raw/master/icons/linux-tux.svg" alt="Linux" width="21px" height="21px"></a> <a href="https://www.npmjs.com/" title="npm"><img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm" width="21px" height="21px"></a> <a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="21px" height="21px"></a> <a href="https://jestjs.io/" title="Jest"><img src="https://github.com/get-icon/geticon/raw/master/icons/jest.svg" alt="Jest" width="21px" height="21px"></a> <a href="https://webpack.js.org/" title="webpack"><img src="https://github.com/get-icon/geticon/raw/master/icons/webpack.svg" alt="webpack" width="21px" height="21px"></a> <a href="https://eslint.org/" title="ESLint"><img src="https://github.com/get-icon/geticon/raw/master/icons/eslint.svg" alt="ESLint" width="21px" height="21px"></a> <a href="https://prettier.io/" title="Prettier"><img src="https://github.com/get-icon/geticon/raw/master/icons/prettier.svg" alt="Prettier" width="21px" height="21px"></a> <a href="https://yarnpkg.com/" title="yarn"><img src="https://github.com/get-icon/geticon/raw/master/icons/yarn.svg" alt="yarn" width="21px" height="21px"></a>
</p>

### Set up tools and environment

You need to have [Node.js](https://nodejs.org/en/download/) installed. Node includes npm as its default package manager.

Open the whole package folder with a good code editor, preferably [Visual Studio Code](https://code.visualstudio.com/download). Consider installing VS Code extensions [ES Lint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

In the VS Code top menu: **Terminal** -> **New Terminal**

### Install dependencies

Install dependencies with npm:

```bash
npm i
```

### Test

Test your code with Jest framework:

```bash
npm run test
```

**Note:** Example TypeScript Package uses [husky](https://typicode.github.io/husky/), [pinst](https://github.com/typicode/pinst) and [commitlint](https://commitlint.js.org/) to automatically execute test and [lint commit message](https://www.conventionalcommits.org/) before every commit.

### Build

Build production (distribution) files in your **dist** folder:

```bash
npm run build
```

It generates CommonJS (in **dist/cjs** folder), ES Modules (in **dist/esm** folder), bundled and minified UMD (in **dist/umd** folder), as well as TypeScript declaration files (in **dist/types** folder).

### Try it before publishing

Run:

```bash
npm link
```

[npm link](https://docs.npmjs.com/cli/v6/commands/npm-link) will create a symlink in the global folder, which may be **{prefix}/lib/node_modules/example-typescript-package** or **C:\Users\<username>\AppData\Roaming\npm\node_modules\example-typescript-package**.

Create an empty folder elsewhere, you don't even need to `npm init` (to generate **package.json**). Open the folder with VS Code, open a terminal and just run:

```bash
npm link x-sampa-to-ipa
```

This will create a symbolic link from globally-installed example-typescript-package to **node_modules/** of the current folder.

You can then create a, for example, **testxsampa.ts** file with the content:

```ts
import { toIpa } from 'x-sampa-to-ipa'

// ...
```

Whenever you want to uninstall the globally-installed example-typescript-package and remove the symlink in the global folder, run:

```bash
npm uninstall x-sampa-to-ipa -g
```

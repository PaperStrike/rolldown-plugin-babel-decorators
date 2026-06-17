# rolldown-plugin-babel-decorators
[![npm Package](https://img.shields.io/npm/v/rolldown-plugin-babel-decorators?logo=npm "rolldown-plugin-babel-decorators")](https://www.npmjs.com/package/rolldown-plugin-babel-decorators)

A simple [Rolldown](https://github.com/rolldown/rolldown) plugin to enable Babel decorators support.

## Installation

```sh
pnpm add rolldown-plugin-babel-decorators
```

## Usage

```ts
import { defineConfig } from 'rolldown'
import decorators from 'rolldown-plugin-babel-decorators'

export default defineConfig({
  plugins: [
    decorators(),
  ],
})
```

## Options

Options are passed directly through to [`@babel/plugin-proposal-decorators`](https://babeljs.io/docs/babel-plugin-proposal-decorators/) (Babel 8).

```ts
import { defineConfig } from 'rolldown'
import { decorators } from 'rolldown-plugin-babel-decorators'
import type { BabelDecoratorsPluginOptions } from 'rolldown-plugin-babel-decorators'

export default defineConfig({
  plugins: [
    decorators({
      // ...Babel decorators plugin options
    }),
  ],
})
```

## License

MIT

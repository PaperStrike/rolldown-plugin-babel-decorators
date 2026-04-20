# rolldown-plugin-babel-decorators

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

| Option   | Type     | Default    | Description                              |
|----------|----------|------------|------------------------------------------|
| version  | string   | "2023-11"  | Decorators proposal version to use       |

Supported versions: `"2023-11"`, `"2023-05"`, `"2023-01"`, `"2022-03"`, `"2021-12"`, `"2018-09"`, `"legacy"`

For detailed differences between decorator proposal versions, see the [Babel documentation](https://babeljs.io/docs/babel-plugin-proposal-decorators#version).

## License

MIT

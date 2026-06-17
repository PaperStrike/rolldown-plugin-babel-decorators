import { PluginItem } from '@babel/core';
import babelPluginDecorators, { type Options as BabelDecoratorsPluginOptions } from '@babel/plugin-proposal-decorators';
import babel from '@rolldown/plugin-babel';

export type { BabelDecoratorsPluginOptions };

export default function decorators(options?: BabelDecoratorsPluginOptions): ReturnType<typeof babel> {
  return babel({
    presets: [
      {
        preset: (() => ({
          plugins: [
            [babelPluginDecorators, options ?? {}] satisfies PluginItem<BabelDecoratorsPluginOptions>,
          ],
        })),
        rolldown: {
          filter: {
            code: '@',
          },
        },
      },
    ],
  })
}

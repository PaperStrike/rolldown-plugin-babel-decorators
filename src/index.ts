import babel from "@rolldown/plugin-babel";

export type BabelDecoratorsVersion =
  | "2023-11"
  | "2023-05"
  | "2023-01"
  | "2022-03"
  | "2021-12"
  | "2018-09"
  | "legacy"

export interface BabelDecoratorsPluginOptions {
  /**
   * The version of the decorators proposal to use.
   * @default "2023-11"
   */
  version?: BabelDecoratorsVersion;
}

export default function decorators(options?: BabelDecoratorsPluginOptions): ReturnType<typeof babel> {
  return babel({
    presets: [
      {
        preset: {
          plugins: [
            [require('@babel/plugin-proposal-decorators'), { version: options?.version ?? "2023-11" }],
          ],
        },
        rolldown: {
          filter: {
            code: '@',
          },
        },
      },
    ],
  })
}

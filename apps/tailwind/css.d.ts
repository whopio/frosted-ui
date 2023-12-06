// My css.d.ts file
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type * as CSS from 'csstype';

declare module 'csstype' {
  interface Properties {
    // WebkitRocketLauncher?: string;

    // Add a CSS Custom Property
    // '--theme-color'?: 'black' | 'white';

    // Allow namespaced CSS Custom Properties
    // [index: `--theme-${string}`]: any;

    // Allow any CSS Custom Properties
    [index: `--${string}`]: unknown;

    // ...or allow any other property
    // [index: string]: any;
  }
}

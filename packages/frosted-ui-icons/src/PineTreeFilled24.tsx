import * as React from 'react';
import { IconProps } from './types';

export const PineTreeFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PineTreeFilled24"
      {...props}
    >
      <path
        d="M11.323.282c.37-.376.983-.376 1.352 0l.076.086 7.043 9.104c.482.624.037 1.53-.752 1.531h-2.495l5.275 7.504c.442.63-.008 1.496-.777 1.496h-8.296v3.251c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.25H2.956c-.77 0-1.22-.868-.778-1.497l5.28-7.504h-2.5c-.79 0-1.235-.907-.752-1.531L11.248.368l.075-.086z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PineTreeFilled24.category = 'Nature & Weather';

export default PineTreeFilled24;

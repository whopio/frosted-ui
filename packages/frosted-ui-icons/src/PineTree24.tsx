import * as React from 'react';
import { IconProps } from './types';

export const PineTree24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PineTree24"
      {...props}
    >
      <path
        d="M11.323.282c.37-.376.983-.376 1.353 0l.075.086 7.043 9.104c.483.624.037 1.53-.752 1.53h-2.495l5.275 7.505c.443.63-.008 1.496-.777 1.496h-8.296v3.25c0 .415-.336.75-.75.75s-.75-.335-.75-.75v-3.25H2.956c-.77 0-1.22-.867-.777-1.496l5.279-7.504h-2.5c-.79 0-1.235-.907-.752-1.531L11.248.368l.075-.086zm-5.245 9.22h2.44c.769.001 1.219.869.776 1.498l-5.278 7.503h15.97l-5.276-7.504c-.442-.63.008-1.496.777-1.496h2.435l-5.923-7.655-5.92 7.655z"
        fill={color}
      />
    </svg>
  );
};

PineTree24.category = 'Nature & Weather';

export default PineTree24;

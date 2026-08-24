import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpFilled16"
      {...props}
    >
      <path
        d="M6.137 2.134c.783-1.512 2.945-1.512 3.728 0l4.86 9.379c1.045 2.015-1.051 4.21-3.113 3.261l-2.858-1.317v-4.69c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.688l-2.865 1.32c-2.062.95-4.158-1.248-3.114-3.262l4.862-9.38z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpFilled16.category = 'Communication';

export default PaperAirplaneUpFilled16;

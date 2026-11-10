import * as React from 'react';
import { IconProps } from './types';

export const Bolt20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Bolt20"
      {...props}
    >
      <path
        d="M8.902.606C9.48-.387 11 .022 11 1.17v5.83h4.443c.976 0 1.575 1.066 1.068 1.9l-6.425 10.548C9.494 20.42 8 20 8 18.863V13H3.87c-.964 0-1.566-1.045-1.082-1.878L8.902.606zM4.304 11.5H8.25c.69 0 1.25.56 1.25 1.25v4.776L14.998 8.5H10.75c-.69 0-1.25-.56-1.25-1.25V2.562L4.304 11.5z"
        fill={color}
      />
    </svg>
  );
};

Bolt20.category = 'Nature & Weather';

export default Bolt20;

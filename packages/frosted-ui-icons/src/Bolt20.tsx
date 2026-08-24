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
        d="M8.902.605C9.48-.388 11 .022 11 1.17V7h4.444c.975 0 1.574 1.067 1.067 1.9l-6.425 10.549c-.591.97-2.086.55-2.086-.586v-5.864H3.87c-.965 0-1.566-1.044-1.082-1.878L8.902.605zM4.304 11.499H8.25c.69 0 1.25.56 1.25 1.25v4.777l5.498-9.027H10.75c-.69 0-1.25-.56-1.25-1.25V2.561l-5.196 8.938z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Bolt20.category = 'Nature & Weather';

export default Bolt20;

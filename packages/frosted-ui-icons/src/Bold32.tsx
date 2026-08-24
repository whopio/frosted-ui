import * as React from 'react';
import { IconProps } from './types';

export const Bold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Bold32"
      {...props}
    >
      <path
        d="M17.669 4.25c3.36 0 6.084 2.723 6.084 6.083v.334c0 2.06-1.026 3.878-2.592 4.979 2.294.87 3.925 3.088 3.925 5.687v.334c0 3.36-2.723 6.083-6.083 6.083H8.989c-1.15 0-2.083-.933-2.083-2.083V6.333c0-1.15.933-2.083 2.083-2.083h8.68zM8.406 25.667c0 .322.261.583.583.583h10.014c2.531 0 4.583-2.052 4.583-4.583v-.334c0-2.531-2.052-4.583-4.583-4.583H8.406v8.917zM8.99 5.75c-.322 0-.583.261-.583.583v8.917h9.263c2.531 0 4.584-2.052 4.584-4.583v-.334c0-2.531-2.053-4.583-4.584-4.583h-8.68z"
        fill={color}
      />
    </svg>
  );
};

Bold32.category = 'Text Formatting';

export default Bold32;

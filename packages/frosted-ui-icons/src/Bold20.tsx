import * as React from 'react';
import { IconProps } from './types';

export const Bold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Bold20"
      {...props}
    >
      <path
        d="M11.043 2.375c2.255 0 4.084 1.828 4.084 4.083v.209c0 1.21-.528 2.297-1.364 3.045 1.305.681 2.197 2.046 2.197 3.621v.209c0 2.255-1.828 4.083-4.083 4.083H5.618c-.874 0-1.583-.709-1.583-1.583V3.958c0-.874.709-1.583 1.583-1.583h5.425zM5.535 16.042c0 .046.037.083.083.083h6.259c1.426 0 2.583-1.156 2.583-2.583v-.209c0-1.427-1.157-2.583-2.583-2.583H5.535v5.292zm.083-12.167c-.046 0-.083.037-.083.083V9.25h5.508c1.427 0 2.584-1.156 2.584-2.583v-.209c0-1.427-1.157-2.583-2.584-2.583H5.618z"
        fill={color}
      />
    </svg>
  );
};

Bold20.category = 'Text Formatting';

export default Bold20;

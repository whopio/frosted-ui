import * as React from 'react';
import { IconProps } from './types';

export const BarGraphBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarGraphBold20"
      {...props}
    >
      <path
        d="M4.5 11c.828 0 1.5.672 1.5 1.5v5c0 .828-.672 1.5-1.5 1.5h-2c-.828 0-1.5-.672-1.5-1.5v-5c0-.828.672-1.5 1.5-1.5h2zM11 1c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5H9c-.777 0-1.415-.59-1.492-1.347L7.5 17.5v-15C7.5 1.672 8.172 1 9 1h2zm6.5 5c.828 0 1.5.672 1.5 1.5v10l-.008.153C18.915 18.41 18.277 19 17.5 19h-2c-.828 0-1.5-.672-1.5-1.5v-10c0-.828.672-1.5 1.5-1.5h2zM3 17h1v-4H3v4zm6.5 0h1V3h-1v14zm6.5 0h1V8h-1v9z"
        fill={color}
      />
    </svg>
  );
};

BarGraphBold20.category = 'Stats & Charts';

export default BarGraphBold20;

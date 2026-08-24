import * as React from 'react';
import { IconProps } from './types';

export const CopyBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CopyBold20"
      {...props}
    >
      <path
        d="M15.9 6C17.612 6 19 7.388 19 9.1v6.8c0 1.712-1.388 3.1-3.1 3.1H9.1C7.388 19 6 17.612 6 15.9V9.1C6 7.388 7.388 6 9.1 6h6.8zM9.1 8C8.492 8 8 8.492 8 9.1v6.8c0 .608.492 1.1 1.1 1.1h6.8c.608 0 1.1-.492 1.1-1.1V9.1c0-.608-.492-1.1-1.1-1.1H9.1zm1.8-7c1.538 0 2.814 1.12 3.057 2.589.037.223-.147.411-.373.411H12.36c-.206 0-.373-.163-.458-.352C11.73 3.266 11.347 3 10.9 3H4.1C3.492 3 3 3.492 3 4.1v6.8c0 .447.266.83.648 1.002.189.085.352.25.352.457v1.225c0 .226-.188.41-.411.373C2.12 13.714 1 12.438 1 10.9V4.1C1 2.388 2.388 1 4.1 1h6.8z"
        fill={color}
      />
    </svg>
  );
};

CopyBold20.category = 'Interface General';

export default CopyBold20;

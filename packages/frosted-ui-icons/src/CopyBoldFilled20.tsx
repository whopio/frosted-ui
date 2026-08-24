import * as React from 'react';
import { IconProps } from './types';

export const CopyBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CopyBoldFilled20"
      {...props}
    >
      <path
        d="M15.9 6C17.612 6 19 7.388 19 9.1v6.8c0 1.712-1.388 3.1-3.1 3.1H9.1C7.388 19 6 17.612 6 15.9V9.1C6 7.388 7.388 6 9.1 6h6.8zm-5-5c1.538 0 2.814 1.12 3.057 2.589.037.223-.147.411-.373.411H9.1C6.283 4 4 6.283 4 9.1v4.484c0 .226-.188.41-.411.373C2.12 13.714 1 12.438 1 10.9V4.1C1 2.388 2.388 1 4.1 1h6.8z"
        fill={color}
      />
    </svg>
  );
};

CopyBoldFilled20.category = 'Interface General';

export default CopyBoldFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusSmallBold24"
      {...props}
    >
      <path
        d="M12 5c.552 0 1 .448 1 1v5h5c.552 0 1 .448 1 1s-.448 1-1 1h-5v5c0 .552-.448 1-1 1s-1-.448-1-1v-5H6c-.552 0-1-.448-1-1s.448-1 1-1h5V6c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallBold24.category = 'Interface General';

export default PlusSmallBold24;

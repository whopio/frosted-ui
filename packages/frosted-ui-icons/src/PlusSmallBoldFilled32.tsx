import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusSmallBoldFilled32"
      {...props}
    >
      <path
        d="M16 6.75c.828 0 1.5.672 1.5 1.5v6.25h6.25c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H17.5v6.25c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V17.5H8.25c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h6.25V8.25c0-.828.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallBoldFilled32.category = 'Interface General';

export default PlusSmallBoldFilled32;

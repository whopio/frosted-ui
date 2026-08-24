import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusSmallBoldFilled16"
      {...props}
    >
      <path
        d="M8 2.75c.828 0 1.5.672 1.5 1.5V6.5h2.25c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H9.5v2.25c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V9.5H4.25c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5H6.5V4.25c0-.828.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallBoldFilled16.category = 'Interface General';

export default PlusSmallBoldFilled16;

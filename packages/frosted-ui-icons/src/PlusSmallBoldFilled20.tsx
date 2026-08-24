import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusSmallBoldFilled20"
      {...props}
    >
      <path
        d="M10 2.75c.828 0 1.5.672 1.5 1.5V8.5h4.25c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H11.5v4.25c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V11.5H4.25c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5H8.5V4.25c0-.828.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallBoldFilled20.category = 'Interface General';

export default PlusSmallBoldFilled20;

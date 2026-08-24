import * as React from 'react';
import { IconProps } from './types';

export const SubtractBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractBoldFilled24"
      {...props}
    >
      <path
        d="M21.5 10.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-19c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h19z"
        fill={color}
      />
    </svg>
  );
};

SubtractBoldFilled24.category = 'Interface General';

export default SubtractBoldFilled24;

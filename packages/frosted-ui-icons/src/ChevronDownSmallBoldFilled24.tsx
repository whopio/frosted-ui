import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.75 9.5L11.6465 14.3964C11.8418 14.5917 12.1584 14.5917 12.3536 14.3964L17.25 9.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownSmallBoldFilled24.category = 'Arrows';

export default ChevronDownSmallBoldFilled24;

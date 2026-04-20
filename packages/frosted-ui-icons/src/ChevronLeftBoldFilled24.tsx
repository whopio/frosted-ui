import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.75 2.5L7.60355 11.6464C7.40829 11.8417 7.40829 12.1583 7.60355 12.3536L16.75 21.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftBoldFilled24.category = 'Arrows';

export default ChevronLeftBoldFilled24;

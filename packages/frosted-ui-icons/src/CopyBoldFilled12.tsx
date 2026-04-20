import * as React from 'react';
import { IconProps } from './types';

export const CopyBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.5 4C10.8807 4 12 5.11929 12 6.5V9.5C12 10.8807 10.8807 12 9.5 12H6.5C5.11929 12 4 10.8807 4 9.5V6.5C4 5.11929 5.11929 4 6.5 4H9.5ZM5.5 0C6.70949 0 7.71858 0.85886 7.9502 2H6.5C4.01472 2 2 4.01472 2 6.5V7.94922C0.858955 7.71753 0 6.70943 0 5.5V2.5C0 1.11929 1.11929 0 2.5 0H5.5Z"
        fill={color}
      />
    </svg>
  );
};

CopyBoldFilled12.category = 'Interface General';

export default CopyBoldFilled12;

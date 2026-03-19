import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 6.25V12M12 17.75V12M12 12H6.25M12 12H17.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlusSmallBoldFilled24.category = 'Product Icons';

export default PlusSmallBoldFilled24;

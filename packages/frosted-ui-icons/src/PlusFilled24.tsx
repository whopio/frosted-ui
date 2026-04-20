import * as React from 'react';
import { IconProps } from './types';

export const PlusFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 2.25V12M12 21.75V12M12 12H2.25M12 12H21.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlusFilled24.category = 'Interface General';

export default PlusFilled24;

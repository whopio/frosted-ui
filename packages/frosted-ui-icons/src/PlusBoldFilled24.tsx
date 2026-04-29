import * as React from 'react';
import { IconProps } from './types';

export const PlusBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0.75C12.8284 0.75 13.5 1.42157 13.5 2.25V10.5H21.75C22.5784 10.5 23.25 11.1716 23.25 12C23.25 12.8284 22.5784 13.5 21.75 13.5H13.5V21.75C13.5 22.5784 12.8284 23.25 12 23.25C11.1716 23.25 10.5 22.5784 10.5 21.75V13.5H2.25C1.42157 13.5 0.75 12.8284 0.75 12C0.75 11.1716 1.42157 10.5 2.25 10.5H10.5V2.25C10.5 1.42157 11.1716 0.75 12 0.75Z"
        fill={color}
      />
    </svg>
  );
};

PlusBoldFilled24.category = 'Interface General';

export default PlusBoldFilled24;

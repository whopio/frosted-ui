import * as React from 'react';
import { IconProps } from './types';

export const SquareAdd12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M6.125 10.125H2.875C2.32271 10.125 1.875 9.6773 1.875 9.125V2.875C1.875 2.32271 2.32271 1.875 2.875 1.875H4.375H7.625H9.125C9.6773 1.875 10.125 2.32271 10.125 2.875V5.625M9.125 7.125V8.625M9.125 8.625V10.125M9.125 8.625H7.625M9.125 8.625H10.625"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SquareAdd12;

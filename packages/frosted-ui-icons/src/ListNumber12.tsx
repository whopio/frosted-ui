import * as React from 'react';
import { IconProps } from './types';

export const ListNumber12 = ({
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
        d="M5.875 8.375H10.125M5.875 3.625H10.125M3.125 4.875V2.375L1.875 3.25M2 7.4659C2 7.4659 2.36187 7.125 2.80443 7.125C3.247 7.125 3.60577 7.43595 3.60577 7.8195C3.60577 8.71925 1.875 8.875 1.875 9.625H3.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ListNumber12;

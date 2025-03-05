import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.12496 16.0416H11.875M7.29163 18.5416H12.7083C14.089 18.5416 15.2083 17.4224 15.2083 16.0416V3.95831C15.2083 2.5776 14.089 1.45831 12.7083 1.45831H7.29163C5.91092 1.45831 4.79163 2.5776 4.79163 3.95831V16.0416C4.79163 17.4224 5.91092 18.5416 7.29163 18.5416Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MobilePhone20;

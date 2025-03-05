import * as React from 'react';
import { IconProps } from './types';

export const AlignCenter16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5 2.42871H10.669M2 6.12561H13.338M2 13.5192H13.338M5 9.82227H10.669"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AlignCenter16;

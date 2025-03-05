import * as React from 'react';
import { IconProps } from './types';

export const RotateLeft24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M4.2404 14.75C5.373 17.9543 8.4289 20.25 12.021 20.25C16.5773 20.25 20.271 16.5563 20.271 12C20.271 7.44365 16.5773 3.75 12.021 3.75C9.2038 3.75 7.3209 4.95438 5.5 7.00891M4.75 4V7.25C4.75 7.66421 5.0858 8 5.5 8H8.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RotateLeft24;

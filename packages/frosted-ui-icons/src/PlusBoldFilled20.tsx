import * as React from 'react';
import { IconProps } from './types';

export const PlusBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0.75C10.8284 0.75 11.5 1.42157 11.5 2.25V8.5H17.75C18.5784 8.5 19.25 9.17157 19.25 10C19.25 10.8284 18.5784 11.5 17.75 11.5H11.5V17.75C11.5 18.5784 10.8284 19.25 10 19.25C9.17157 19.25 8.5 18.5784 8.5 17.75V11.5H2.25C1.42157 11.5 0.75 10.8284 0.75 10C0.75 9.17157 1.42157 8.5 2.25 8.5H8.5V2.25C8.5 1.42157 9.17157 0.75 10 0.75Z"
        fill={color}
      />
    </svg>
  );
};

PlusBoldFilled20.category = 'Interface General';

export default PlusBoldFilled20;

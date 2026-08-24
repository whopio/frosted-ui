import * as React from 'react';
import { IconProps } from './types';

export const HomeBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HomeBoldFilled16"
      {...props}
    >
      <path
        d="M5.364 2.06c1.491-1.367 3.78-1.367 5.272 0l3.267 2.994C14.602 5.694 15 6.6 15 7.547v4.667C15 13.752 13.752 15 12.214 15H10.8c-.718 0-1.3-.582-1.3-1.3V10c0-.829-.672-1.5-1.5-1.5S6.5 9.17 6.5 10v3.7c0 .718-.582 1.3-1.3 1.3H3.786C2.248 15 1 13.752 1 12.213V7.547c0-.947.398-1.852 1.097-2.493L5.364 2.06z"
        fill={color}
      />
    </svg>
  );
};

HomeBoldFilled16.category = 'Buildings';

export default HomeBoldFilled16;

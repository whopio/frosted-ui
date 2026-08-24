import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FacebookFilled16"
      {...props}
    >
      <path
        d="M6.188 15.333v-5.005H4.64v-2.3h1.548v-.992c0-2.562 1.155-3.748 3.66-3.748.474 0 1.293.093 1.63.186v2.084c-.178-.018-.487-.027-.868-.027-1.23 0-1.704.466-1.704 1.683v.813h2.451l-.42 2.3H8.91V15.5c3.714-.451 6.591-3.625 6.591-7.473C15.5 3.87 12.142.5 8 .5 3.858.5.5 3.87.5 8.027c0 3.53 2.421 6.493 5.688 7.306z"
        fill={color}
      />
    </svg>
  );
};

FacebookFilled16.category = 'Social & Brands';

export default FacebookFilled16;

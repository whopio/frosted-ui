import * as React from 'react';
import { IconProps } from './types';

export const Merch24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.67808 10.3647L0.966595 6.93461C0.779049 6.55874 0.936747 6.10214 1.31628 5.92212L8.53125 2.5C8.53125 2.5 8.90625 5.5 12 5.5C15.0938 5.5 15.4687 2.5 15.4687 2.5L22.6837 5.92212C23.0633 6.10214 23.221 6.55874 23.0334 6.93461L21.3219 10.3647C21.1573 10.6946 20.7772 10.856 20.4255 10.7452L18.75 10.2175V21C18.75 21.4142 18.4142 21.75 18 21.75H6C5.58579 21.75 5.25 21.4142 5.25 21V10.2175L3.57447 10.7452C3.22276 10.856 2.84271 10.6946 2.67808 10.3647Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Merch24;

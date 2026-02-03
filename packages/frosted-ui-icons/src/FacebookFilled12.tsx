import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.55042 11.8665V7.86208H3.31209V6.02177H4.55042V5.22888C4.55042 3.17916 5.4744 2.23006 7.4784 2.23006C7.85778 2.23006 8.51274 2.30466 8.78178 2.37927V4.04629C8.64006 4.03191 8.39274 4.02455 8.08806 4.02455C7.10406 4.02455 6.72474 4.3979 6.72474 5.37106V6.02177H8.68578L8.34978 7.86178H6.72744V12C9.69822 11.6388 12 9.1001 12 6.02177C12 2.69608 9.31368 0 6 0C2.68633 0 0 2.69608 0 6.02177C0 8.84592 1.93688 11.2157 4.55042 11.8665Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookFilled12;

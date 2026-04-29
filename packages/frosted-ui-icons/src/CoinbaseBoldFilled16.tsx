import * as React from 'react';
import { IconProps } from './types';

export const CoinbaseBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8.0625 3.75C5.69888 3.75017 3.75 5.63494 3.75 8C3.75 10.3651 5.69888 12.2498 8.0625 12.25C9.82165 12.25 11.3442 11.2102 12.0137 9.70703C12.2384 9.20255 12.0113 8.61144 11.5068 8.38672C11.0023 8.16203 10.4112 8.38904 10.1865 8.89355C9.83353 9.68581 9.02012 10.25 8.0625 10.25C6.76718 10.2498 5.75 9.22457 5.75 8C5.75 6.77543 6.76718 5.75017 8.0625 5.75C9.02012 5.75 9.83353 6.31419 10.1865 7.10645C10.4112 7.61096 11.0023 7.83797 11.5068 7.61328C12.0113 7.38856 12.2384 6.79745 12.0137 6.29297C11.3442 4.78977 9.82165 3.75 8.0625 3.75Z"
        fill={color}
      />
    </svg>
  );
};

CoinbaseBoldFilled16.category = 'Interface General';

export default CoinbaseBoldFilled16;

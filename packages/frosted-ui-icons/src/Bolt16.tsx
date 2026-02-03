import * as React from 'react';
import { IconProps } from './types';

export const Bolt16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.50977 0.429199C8.09573 -0.366171 9.39913 0.0347307 9.39941 1.06006V5.50049H12.6006C13.5001 5.50072 14.0515 6.4873 13.5801 7.25342L8.51074 15.4907C7.95586 16.3918 6.56709 15.9989 6.56641 14.9409V10.5005H3.36523C2.46572 10.5005 1.9146 9.51371 2.38574 8.74756L7.45508 0.510254L7.50977 0.429199ZM3.99121 9.00049H6.91602C7.55114 9.00049 8.06641 9.51575 8.06641 10.1509V13.3491L11.9736 7.00049H9.0498C8.41484 7.00047 7.89965 6.48501 7.89941 5.8501V2.6499L3.99121 9.00049Z"
        fill={color}
      />
    </svg>
  );
};

Bolt16.category = 'Nature & Weather';

export default Bolt16;

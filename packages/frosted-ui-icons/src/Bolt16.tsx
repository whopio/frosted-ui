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
        d="M7.51074 0.429199C8.0967 -0.366171 9.4001 0.0347307 9.40039 1.06006V5.50049H12.6016C13.501 5.50072 14.0525 6.4873 13.5811 7.25342L8.51172 15.4907C7.95684 16.3918 6.56807 15.9989 6.56738 14.9409V10.5005H3.36621C2.4667 10.5005 1.91558 9.51371 2.38672 8.74756L7.45605 0.510254L7.51074 0.429199ZM3.99219 9.00049H6.91699C7.55212 9.00049 8.06738 9.51575 8.06738 10.1509V13.3491L11.9746 7.00049H9.05078C8.41582 7.00047 7.90063 6.48501 7.90039 5.8501V2.6499L3.99219 9.00049Z"
        fill={color}
      />
    </svg>
  );
};

Bolt16.category = 'Nature & Weather';

export default Bolt16;

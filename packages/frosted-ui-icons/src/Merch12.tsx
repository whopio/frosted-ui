import * as React from 'react';
import { IconProps } from './types';

export const Merch12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.57407 5.13597L0.786326 3.55719C0.698072 3.38032 0.773702 3.1655 0.953299 3.08293L4.39617 1.5C4.39617 1.5 4.56956 2.8871 6 2.8871C7.43045 2.8871 7.60383 1.5 7.60383 1.5L11.0467 3.08293C11.2263 3.1655 11.3019 3.38032 11.2137 3.55719L10.4259 5.13597C10.3496 5.28903 10.1737 5.36447 10.0102 5.31433L9.20766 5.06833L9.20766 9.875C9.20766 10.0821 9.03976 10.25 8.83266 10.25H3.16734C2.96023 10.25 2.79234 10.0821 2.79234 9.875L2.79234 5.06833L1.98983 5.31433C1.82628 5.36447 1.65045 5.28903 1.57407 5.13597Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Merch12;

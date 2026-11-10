import * as React from 'react';
import { IconProps } from './types';

export const PineTree12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PineTree12"
      {...props}
    >
      <path
        d="M5.317.29c.371-.385.994-.385 1.365 0l.076.089 3.097 4.098C10.328 5.103 9.882 6 9.097 6h-.113l1.834 2.486c.462.627.014 1.514-.765 1.514H6.75v1.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V10H1.946c-.779 0-1.227-.887-.764-1.514L3.016 6H2.9c-.784 0-1.23-.897-.758-1.523L5.242.38 5.317.29zM4.007 4.5h.096c.78 0 1.227.886.765 1.514L3.035 8.5h5.93L7.13 6.014c-.462-.628-.015-1.514.764-1.514h.098L6 1.863 4.007 4.5z"
        fill={color}
      />
    </svg>
  );
};

PineTree12.category = 'Nature & Weather';

export default PineTree12;

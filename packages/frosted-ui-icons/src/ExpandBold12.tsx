import * as React from 'react';
import { IconProps } from './types';

export const ExpandBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.04297 6.54297C4.43349 6.15244 5.06651 6.15244 5.45703 6.54297C5.84756 6.93349 5.84756 7.56651 5.45703 7.95703L3.41406 10H4.75C5.30228 10 5.75 10.4477 5.75 11C5.75 11.5523 5.30228 12 4.75 12H1C0.447715 12 0 11.5523 0 11V7.25C0 6.69772 0.447715 6.25 1 6.25C1.55228 6.25 2 6.69772 2 7.25V8.58594L4.04297 6.54297ZM11 0C11.5523 0 12 0.447715 12 1V4.75C12 5.30228 11.5523 5.75 11 5.75C10.4477 5.75 10 5.30228 10 4.75V3.41406L7.95703 5.45703C7.56651 5.84756 6.93349 5.84756 6.54297 5.45703C6.15244 5.06651 6.15244 4.43349 6.54297 4.04297L8.58594 2H7.25C6.69772 2 6.25 1.55228 6.25 1C6.25 0.447715 6.69772 0 7.25 0H11Z"
        fill={color}
      />
    </svg>
  );
};

ExpandBold12.category = 'Arrows';

export default ExpandBold12;

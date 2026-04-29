import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM7.29297 4.04297C7.68349 3.65244 8.31651 3.65244 8.70703 4.04297C9.09756 4.43349 9.09756 5.06651 8.70703 5.45703L5.83203 8.33203C5.44151 8.72256 4.80849 8.72256 4.41797 8.33203L3.04297 6.95703C2.65244 6.56651 2.65244 5.93349 3.04297 5.54297C3.43349 5.15244 4.06651 5.15244 4.45703 5.54297L5.125 6.21094L7.29297 4.04297Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleBold12.category = 'Checkmarks';

export default CheckmarkCircleBold12;

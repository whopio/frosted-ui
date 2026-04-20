import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.5 0.75C11.3284 0.750008 12 1.42158 12 2.25V6.3125C12 7.65869 10.9087 8.74999 9.56247 8.75H5.05271C5.58724 9.34529 5.56248 10.2605 4.98435 10.8242C4.39118 11.4023 3.4415 11.3899 2.86326 10.7969L0.425756 8.29688C-0.141919 7.71438 -0.141919 6.78562 0.425756 6.20312L2.86326 3.70312C3.4415 3.11005 4.39118 3.0977 4.98435 3.67578C5.56248 4.23946 5.58724 5.15471 5.05271 5.75H8.99997V2.25C8.99997 1.42157 9.67155 0.75 10.5 0.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleLeftBoldFilled12.category = 'Arrows';

export default ArrowDownAngleLeftBoldFilled12;

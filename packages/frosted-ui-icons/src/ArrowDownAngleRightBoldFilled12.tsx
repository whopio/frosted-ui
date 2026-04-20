import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.50003 0.75C0.671617 0.750022 2.57492e-05 1.42159 2.57492e-05 2.25V6.3125C2.57492e-05 7.65868 1.09135 8.74998 2.43753 8.75H6.94729C6.41278 9.34528 6.43754 10.2605 7.01565 10.8242C7.60882 11.4023 8.5585 11.3899 9.13674 10.7969L11.5742 8.29688C12.1419 7.71438 12.1419 6.78562 11.5742 6.20312L9.13674 3.70312C8.5585 3.11007 7.60882 3.09771 7.01565 3.67578C6.43754 4.23946 6.41278 5.15472 6.94729 5.75H3.00003V2.25C3.00003 1.42157 2.32845 0.75 1.50003 0.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRightBoldFilled12.category = 'Arrows';

export default ArrowDownAngleRightBoldFilled12;

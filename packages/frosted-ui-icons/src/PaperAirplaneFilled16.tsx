import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.4033 5.93408C16.1493 6.79628 16.1493 9.28576 14.4033 10.1479L3.97949 15.2954C1.85212 16.3452 -0.430986 14.1756 0.509766 11.9976L1.89551 8.79053H6.79004C7.20425 8.79053 7.54004 8.45474 7.54004 8.04053C7.53991 7.62643 7.20417 7.29053 6.79004 7.29053H1.89551L0.509766 4.08447C-0.430727 1.90658 1.85223 -0.263033 3.97949 0.786621L14.4033 5.93408Z"
        fill={color}
      />
    </svg>
  );
};

export default PaperAirplaneFilled16;

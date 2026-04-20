import * as React from 'react';
import { IconProps } from './types';

export const HeartFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.625 1C10.4637 1 12 2.43801 12 4.4502C12 6.5819 10.7902 8.20231 9.5625 9.2998C8.32979 10.4018 6.98523 11.0644 6.49121 11.2881C6.17682 11.4304 5.82318 11.4304 5.50879 11.2881C5.01477 11.0644 3.67021 10.4018 2.4375 9.2998C1.20983 8.20231 4.40936e-05 6.5819 0 4.4502C0 2.43801 1.53632 1 3.375 1C4.57183 1 5.41142 1.56601 5.93066 2.10449C5.95482 2.12954 5.97712 2.1557 6 2.18066C6.02288 2.1557 6.04518 2.12954 6.06934 2.10449C6.58858 1.56601 7.42817 1 8.625 1Z"
        fill={color}
      />
    </svg>
  );
};

HeartFilled12.category = 'Interface General';

export default HeartFilled12;

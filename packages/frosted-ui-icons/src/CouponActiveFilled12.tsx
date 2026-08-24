import * as React from 'react';
import { IconProps } from './types';

export const CouponActiveFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CouponActiveFilled12"
      {...props}
    >
      <path
        d="M3.998 0c.449 0 .79.256.98.553l.073.129.075.131c.193.292.516.476.874.476.41 0 .773-.24.95-.607l.071-.13C7.212.256 7.553 0 8.002 0H9.25C10.216 0 11 .784 11 1.75v8.5c0 .966-.784 1.75-1.75 1.75H8.002c-.513 0-.885-.333-1.053-.682-.176-.366-.54-.607-.949-.607-.41 0-.773.24-.95.607-.167.349-.54.682-1.052.682H2.75C1.784 12 1 11.216 1 10.25v-8.5C1 .784 1.784 0 2.75 0h1.248zM8.28 3.72c-.293-.293-.767-.293-1.06 0l-3.5 3.5c-.293.293-.293.767 0 1.06.293.293.767.293 1.06 0l3.5-3.5c.293-.293.293-.767 0-1.06zM7.75 7c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75S8.164 7 7.75 7zm-3.5-3.5c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75-.336-.75-.75-.75z"
        fill={color}
      />
    </svg>
  );
};

CouponActiveFilled12.category = 'Money & Shopping';

export default CouponActiveFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.56307 3.4302C7.07716 2.93991 7.08063 2.14861 7.57088 1.66263C8.06118 1.17697 8.85256 1.18032 9.33846 1.67044L14.8336 7.21341C15.4603 7.84587 15.455 8.86672 14.8228 9.49368L9.33065 14.938C8.84035 15.424 8.04906 15.4205 7.56307 14.9302C7.07716 14.4399 7.08063 13.6486 7.57088 13.1626L12.4322 8.34329L7.56307 3.4302ZM1.06698 3.43313C0.578897 2.945 0.578925 2.1537 1.06698 1.66556C1.55514 1.17771 2.34649 1.17754 2.83456 1.66556L8.32967 7.16067C8.95926 7.79037 8.95912 8.8112 8.32967 9.44095L2.83456 14.9341C2.34637 15.4221 1.55506 15.4222 1.06698 14.9341C0.579002 14.4459 0.578906 13.6546 1.06698 13.1665L5.93417 8.3013L1.06698 3.43313Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightFilled16.category = 'Arrows';

export default DoubleChevronRightFilled16;

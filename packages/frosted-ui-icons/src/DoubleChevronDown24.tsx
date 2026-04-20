import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDown24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M21.7204 9.71256C22.0132 9.41975 22.488 9.41985 22.7809 9.71256C23.0736 10.0053 23.0744 10.4802 22.7819 10.7731L12.9528 20.6051C12.426 21.1321 11.5715 21.132 11.0446 20.6051L1.21548 10.7731C0.922661 10.4802 0.922623 10.0054 1.21548 9.71256C1.5084 9.41984 1.9832 9.41974 2.27602 9.71256L11.9977 19.4372L21.7204 9.71256ZM21.7194 3.21549C22.0121 2.92269 22.487 2.92305 22.7799 3.21549C23.0728 3.50827 23.0735 3.98308 22.7809 4.27604L12.9518 14.1081C12.4249 14.6349 11.5704 14.635 11.0436 14.1081L1.2145 4.27604C0.92205 3.98316 0.921929 3.50826 1.2145 3.21549C1.50731 2.92278 1.98217 2.92294 2.27505 3.21549L11.9967 12.9401L21.7194 3.21549Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDown24.category = 'Arrows';

export default DoubleChevronDown24;

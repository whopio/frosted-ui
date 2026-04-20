import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDown20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.7199 8.66713C18.0127 8.37446 18.4876 8.3745 18.7804 8.66713C19.0732 8.95987 19.0739 9.43475 18.7814 9.72767L10.8693 17.6398C10.3892 18.1197 9.61106 18.1198 9.13103 17.6398L1.2199 9.72767C0.927031 9.43477 0.927019 8.96001 1.2199 8.66713C1.51281 8.37444 1.98763 8.37431 2.28045 8.66713L10.0002 16.3869L17.7199 8.66713ZM1.2199 2.22181C1.51281 1.92933 1.98768 1.92911 2.28045 2.22181L10.0002 9.94154L17.7199 2.22181C18.0127 1.92935 18.4876 1.9293 18.7804 2.22181C19.0732 2.51449 19.0737 2.9894 18.7814 3.28236L10.8693 11.1945C10.3892 11.6744 9.61105 11.6745 9.13103 11.1945L1.2199 3.28236C0.927083 2.98946 0.927037 2.51468 1.2199 2.22181Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDown20.category = 'Arrows';

export default DoubleChevronDown20;

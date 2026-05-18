import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M21.7011 16.9101C22.1903 17.3971 22.9816 17.3953 23.4687 16.9062C23.9555 16.4169 23.9539 15.6256 23.4647 15.1386L17.3524 9.05264C16.6047 8.30826 15.3952 8.30834 14.6474 9.05264L8.53506 15.1386C8.04585 15.6256 8.04415 16.4169 8.53115 16.9062C9.01822 17.3954 9.8095 17.3971 10.2987 16.9101L15.9999 11.2343L21.7011 16.9101ZM21.7011 23.1659C22.1903 23.6529 22.9816 23.6511 23.4687 23.162C23.9556 22.6728 23.9539 21.8815 23.4647 21.3944L17.3524 15.3085C16.6047 14.564 15.3952 14.5641 14.6474 15.3085L8.53506 21.3944C8.04583 21.8815 8.04409 22.6728 8.53115 23.162C9.01823 23.6511 9.80953 23.653 10.2987 23.1659L15.9999 17.4901L21.7011 23.1659Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallFilled32.category = 'Arrows';

export default DoubleChevronUpSmallFilled32;

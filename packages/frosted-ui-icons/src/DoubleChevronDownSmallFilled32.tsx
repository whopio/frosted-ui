import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.7011 15.1143C22.1903 14.6273 22.9816 14.6291 23.4687 15.1182C23.9555 15.6075 23.9539 16.3988 23.4647 16.8858L17.3524 22.9717C16.6047 23.7161 15.3952 23.716 14.6474 22.9717L8.53506 16.8858C8.04585 16.3987 8.04415 15.6074 8.53115 15.1182C9.01822 14.629 9.8095 14.6272 10.2987 15.1143L15.9999 20.7901L21.7011 15.1143ZM21.7011 8.85844C22.1903 8.3715 22.9816 8.37324 23.4687 8.86234C23.9556 9.35155 23.9539 10.1429 23.4647 10.6299L17.3524 16.7159C16.6047 17.4603 15.3952 17.4603 14.6474 16.7159L8.53506 10.6299C8.04583 10.1429 8.04409 9.35158 8.53115 8.86234C9.01823 8.37321 9.80953 8.3714 10.2987 8.85844L15.9999 14.5342L21.7011 8.85844Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallFilled32.category = 'Arrows';

export default DoubleChevronDownSmallFilled32;

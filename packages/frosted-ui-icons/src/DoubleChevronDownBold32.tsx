import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M29.2945 12.5929C29.685 12.2024 30.319 12.2025 30.7096 12.5929C31.0998 12.9834 31.0998 13.6165 30.7096 14.007L17.2955 27.421C16.5807 28.1358 15.4214 28.1358 14.7066 27.421L1.29257 14.007C0.90215 13.6165 0.90215 12.9834 1.29257 12.5929C1.68307 12.2024 2.3161 12.2025 2.70663 12.5929L16.0006 25.8869L29.2945 12.5929ZM29.2945 5.29701C29.685 4.90651 30.319 4.90655 30.7096 5.29701C31.0998 5.68748 31.0998 6.32061 30.7096 6.71108L17.2955 20.1251C16.5807 20.8398 15.4214 20.8399 14.7066 20.1251L1.29257 6.71108C0.902159 6.3206 0.90222 5.68753 1.29257 5.29701C1.68308 4.90651 2.31611 4.90655 2.70663 5.29701L16.0006 18.591L29.2945 5.29701Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBold32.category = 'Arrows';

export default DoubleChevronDownBold32;

import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRight32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.51465 7.51489C7.80754 7.22201 8.28231 7.222 8.5752 7.51489L23.1777 22.1165L23.0283 12.1223C23.0222 11.7083 23.3527 11.368 23.7666 11.3616C24.1807 11.3555 24.5221 11.6858 24.5283 12.0999L24.7051 23.9436C24.7081 24.1463 24.6287 24.3422 24.4854 24.4856C24.342 24.629 24.1461 24.7083 23.9434 24.7053L12.0996 24.5286C11.6855 24.5223 11.3552 24.1809 11.3613 23.7668C11.3677 23.3529 11.7081 23.0225 12.1221 23.0286L22.1162 23.178L7.51465 8.57544C7.22176 8.28255 7.22176 7.80779 7.51465 7.51489Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDownRight32;

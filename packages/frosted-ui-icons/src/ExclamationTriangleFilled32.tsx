import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangleFilled32"
      {...props}
    >
      <path
        d="M12.685 3.979c1.476-2.548 5.154-2.548 6.63 0L30.472 23.25c1.478 2.553-.365 5.749-3.315 5.75H4.842C1.892 29 .05 25.803 1.527 23.25L12.685 3.98zM16 22c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0-12c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75z"
        fill={color}
      />
    </svg>
  );
};

ExclamationTriangleFilled32.category = 'Interface General';

export default ExclamationTriangleFilled32;

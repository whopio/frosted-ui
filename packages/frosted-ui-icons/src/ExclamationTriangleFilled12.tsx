import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.27874 1.63263C5.01284 0.256204 6.98598 0.256285 7.72015 1.63263L11.7201 9.13263C12.4125 10.4315 11.4714 11.9998 9.99944 11.9998H1.99944C0.527616 11.9997 -0.413541 10.4314 0.27874 9.13263L4.27874 1.63263ZM5.99944 8.24982C5.58531 8.24989 5.24948 8.58568 5.24944 8.99982C5.24944 9.414 5.58528 9.74976 5.99944 9.74982C6.41366 9.74982 6.74944 9.41403 6.74944 8.99982C6.7494 8.58564 6.41363 8.24982 5.99944 8.24982ZM5.99944 4.24982C5.58539 4.24999 5.24947 4.58574 5.24944 4.99982V6.74982C5.24944 7.16393 5.58537 7.49965 5.99944 7.49982C6.41366 7.49982 6.74944 7.16404 6.74944 6.74982V4.99982C6.74941 4.58563 6.41364 4.24982 5.99944 4.24982Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangleFilled12.category = 'Interface General';

export default ExclamationTriangleFilled12;

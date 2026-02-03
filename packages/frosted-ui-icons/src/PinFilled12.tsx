import * as React from 'react';
import { IconProps } from './types';

export const PinFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.25 0C8.2165 0 9 0.783502 9 1.75V4.16797C9.00006 4.24939 9.02257 4.32959 9.06445 4.39941L10.2344 6.34961C10.9342 7.51603 10.0937 9 8.7334 9H6.75V11.25C6.75 11.6642 6.4142 12 6 12C5.58582 12 5.25 11.6642 5.25 11.25V9H3.2666C1.9064 8.99994 1.06583 7.516 1.76562 6.34961L2.93555 4.39941C2.97745 4.32958 2.99994 4.24941 3 4.16797V1.75C3 0.783529 3.78354 4.39982e-05 4.75 0H7.25Z"
        fill={color}
      />
    </svg>
  );
};

export default PinFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const LightningBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LightningBoldFilled12"
      {...props}
    >
      <path
        d="M8.022 0c.919 0 1.522.96 1.124 1.787L8.16 3.83h1.217c1.065 0 1.639 1.251.944 2.059l-4.879 5.674c-.822.956-2.383.224-2.173-1.02l.476-2.823h-1.13c-.845 0-1.444-.822-1.187-1.626L3.065.98l.04-.108C3.32.348 3.832 0 4.407 0h3.614z"
        fill={color}
      />
    </svg>
  );
};

LightningBoldFilled12.category = 'Nature & Weather';

export default LightningBoldFilled12;

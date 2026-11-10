import * as React from 'react';
import { IconProps } from './types';

export const BoltBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BoltBoldFilled24"
      {...props}
    >
      <path
        d="M11.21.679c.703-1.2 2.54-.702 2.541.688V8.31h5.06c1.244 0 2.005 1.363 1.353 2.421L12.402 23.33c-.747 1.211-2.614.682-2.614-.741v-6.889H5.19c-1.226 0-1.99-1.332-1.37-2.391L11.21.678z"
        fill={color}
      />
    </svg>
  );
};

BoltBoldFilled24.category = 'Nature & Weather';

export default BoltBoldFilled24;

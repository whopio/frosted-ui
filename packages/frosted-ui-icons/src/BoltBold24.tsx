import * as React from 'react';
import { IconProps } from './types';

export const BoltBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BoltBold24"
      {...props}
    >
      <path
        d="M11.21.679c.703-1.2 2.54-.702 2.541.688V8.31h5.06c1.244 0 2.005 1.363 1.353 2.421L12.402 23.33c-.747 1.211-2.614.682-2.614-.741v-6.889H5.19c-1.226 0-1.99-1.332-1.37-2.391L11.21.678zm-5.302 13.02H10.2c.878 0 1.59.712 1.59 1.59v5.224l6.285-10.203H13.34c-.877 0-1.589-.712-1.589-1.59V3.717l-5.843 9.983z"
        fill={color}
      />
    </svg>
  );
};

BoltBold24.category = 'Nature & Weather';

export default BoltBold24;

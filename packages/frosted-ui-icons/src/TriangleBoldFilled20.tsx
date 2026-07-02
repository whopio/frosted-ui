import * as React from 'react';
import { IconProps } from './types';

export const TriangleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.49983 3.29689C8.56972 1.30178 11.4299 1.3018 12.4998 3.29689L18.6805 14.8223C19.6938 16.7122 18.3248 18.9997 16.1805 19H3.81916C1.67484 18.9997 0.305901 16.7122 1.31916 14.8223L7.49983 3.29689Z"
        fill={color}
      />
    </svg>
  );
};

TriangleBoldFilled20.category = 'Interface General';

export default TriangleBoldFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M21.2928 4.56757C21.6833 4.17754 22.3165 4.17748 22.7069 4.56757C23.0974 4.95807 23.0973 5.59208 22.7069 5.98261L8.89244 19.7971C8.50192 20.1875 7.86791 20.1876 7.4774 19.7971L1.29283 13.6115C0.902425 13.221 0.902353 12.5879 1.29283 12.1975C1.68333 11.8072 2.31642 11.8071 2.7069 12.1975L8.18443 17.676L21.2928 4.56757Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkBold24.category = 'Checkmarks';

export default CheckmarkBold24;

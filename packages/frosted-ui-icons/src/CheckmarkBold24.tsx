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
        d="M21.293 4.56763C21.6834 4.17759 22.3166 4.17754 22.707 4.56763C23.0975 4.95813 23.0975 5.59214 22.707 5.98267L8.89258 19.7971C8.50205 20.1876 7.86804 20.1876 7.47754 19.7971L1.29297 13.6116C0.902561 13.221 0.902488 12.588 1.29297 12.1975C1.68347 11.8072 2.31656 11.8072 2.70703 12.1975L8.18457 17.676L21.293 4.56763Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkBold24.category = 'Checkmarks';

export default CheckmarkBold24;

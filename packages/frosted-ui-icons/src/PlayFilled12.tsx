import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25 10.07V1.92984C2.25 1.01517 3.26608 0.466561 4.03084 0.968313L10.2344 5.03841C10.9267 5.49256 10.9267 6.50732 10.2344 6.96146L4.03084 11.0316C3.26608 11.5333 2.25 10.9847 2.25 10.07Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayFilled12.category = 'Sound & Music';

export default PlayFilled12;

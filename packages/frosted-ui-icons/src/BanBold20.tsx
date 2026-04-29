import * as React from 'react';
import { IconProps } from './types';

export const BanBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM5.45117 15.9619C6.71305 16.9262 8.28924 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 8.28924 16.9262 6.71305 15.9619 5.45117L5.45117 15.9619ZM10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 11.7103 3.07335 13.2862 4.03711 14.5479L14.5479 4.03711C13.2862 3.07335 11.7103 2.5 10 2.5Z"
        fill={color}
      />
    </svg>
  );
};

BanBold20.category = 'Interface General';

export default BanBold20;

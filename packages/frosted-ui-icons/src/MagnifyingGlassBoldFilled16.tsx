import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.00098 0.750977C10.4527 0.751089 13.251 3.54927 13.251 7.00098C13.2509 8.18299 12.9217 9.28786 12.3516 10.2305L14.8105 12.6885C15.3963 13.2743 15.3963 14.2248 14.8105 14.8105C14.2248 15.3963 13.2743 15.3963 12.6885 14.8105L10.2305 12.3516C9.28786 12.9217 8.18299 13.2509 7.00098 13.251C3.54927 13.251 0.751089 10.4527 0.750977 7.00098C0.750977 3.5492 3.5492 0.750977 7.00098 0.750977ZM7.00098 3.75098C5.20605 3.75098 3.75098 5.20605 3.75098 7.00098C3.75109 8.79581 5.20612 10.251 7.00098 10.251C8.79574 10.2509 10.2509 8.79574 10.251 7.00098C10.251 5.20612 8.79581 3.75109 7.00098 3.75098Z"
        fill={color}
      />
    </svg>
  );
};

MagnifyingGlassBoldFilled16.category = 'Product Icons';

export default MagnifyingGlassBoldFilled16;

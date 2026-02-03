import * as React from 'react';
import { IconProps } from './types';

export const YoutubeFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M26.9391 5.34376C28.1445 5.71692 29.0919 6.81241 29.4145 8.20641C29.9976 10.7306 30 16.0001 30 16.0001C30 16.0001 30 21.2697 29.4145 23.7938C29.0919 25.1878 28.1445 26.2833 26.9391 26.6563C24.7564 27.3334 16 27.3334 16 27.3334C16 27.3334 7.24365 27.3334 5.06091 26.6563C3.85545 26.2833 2.90813 25.1878 2.58544 23.7938C2 21.2697 2 16.0001 2 16.0001C2 16.0001 2 10.7306 2.58544 8.20641C2.90813 6.81241 3.85545 5.71692 5.06091 5.34376C7.24365 4.66675 16 4.66675 16 4.66675C16 4.66675 24.7564 4.66675 26.9391 5.34376ZM20.6845 16.0005L13.0638 20.3999V11.6009L20.6845 16.0005Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

YoutubeFilled32.category = 'Social & Brands';

export default YoutubeFilled32;

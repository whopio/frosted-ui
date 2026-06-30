import * as React from 'react';
import { IconProps } from './types';

export const PhotoFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.6504 0C17.6048 0.000210782 19.9998 2.3952 20 5.34961V14.6504C19.9998 17.6048 17.6048 19.9998 14.6504 20H5.34961C2.3952 19.9998 0.000211295 17.6048 0 14.6504V5.34961C0.00021104 2.3952 2.3952 0.000211037 5.34961 0H14.6504ZM13.875 8.4375C13.0758 8.4375 12.3092 8.7552 11.7441 9.32031L3.21094 17.8516C3.82264 18.2611 4.55823 18.4999 5.34961 18.5H14.6504C16.7764 18.4998 18.4998 16.7764 18.5 14.6504V11.8145L16.0059 9.32031C15.4408 8.7552 14.6742 8.4375 13.875 8.4375ZM6.75 4C5.23122 4 4 5.23122 4 6.75C4 8.26878 5.23122 9.5 6.75 9.5C8.26878 9.5 9.5 8.26878 9.5 6.75C9.5 5.23122 8.26878 4 6.75 4Z"
        fill={color}
      />
    </svg>
  );
};

PhotoFilled20.category = 'Interface General';

export default PhotoFilled20;

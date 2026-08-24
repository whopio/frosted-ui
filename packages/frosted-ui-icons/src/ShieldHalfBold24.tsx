import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfBold24"
      {...props}
    >
      <path
        d="M10.957.186c.673-.248 1.413-.248 2.086 0l7.992 2.955C22.215 3.577 23 4.702 23 5.96v7.196c0 3.246-2.489 5.824-4.81 7.553-2.383 1.774-4.924 2.903-5.623 3.198-.366.155-.768.155-1.134 0-.7-.295-3.24-1.424-5.622-3.198C3.489 18.98 1 16.403 1 13.157V5.961c0-1.259.784-2.384 1.965-2.82L10.957.186zm-7.299 4.83C3.263 5.164 3 5.54 3 5.962v7.196c0 2.217 1.752 4.27 4.005 5.948 1.433 1.067 2.942 1.886 3.995 2.402V2.303L3.658 5.017zM13 21.507c1.053-.515 2.562-1.334 3.995-2.4C19.248 17.426 21 15.373 21 13.156V5.961c0-.422-.263-.798-.658-.944L13 2.303v19.204z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfBold24.category = 'Security';

export default ShieldHalfBold24;

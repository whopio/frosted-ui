import * as React from 'react';
import { IconProps } from './types';

export const CopyBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M26.3564 9C28.9208 9 31 11.0792 31 13.6436V26.3564C31 28.9208 28.9208 31 26.3564 31H13.6436C11.0792 31 9 28.9208 9 26.3564V13.6436C9 11.0792 11.0792 9 13.6436 9H26.3564ZM18.3564 1C20.9208 1 23 3.07923 23 5.64355V6.65039C22.9998 6.84338 22.8434 6.99979 22.6504 7H13.6436C9.97467 7 7 9.97467 7 13.6436V22.6504C6.99979 22.8434 6.84338 22.9998 6.65039 23H5.64355C3.07924 23 1 20.9208 1 18.3564V5.64355C1 3.07924 3.07924 1 5.64355 1H18.3564Z"
        fill={color}
      />
    </svg>
  );
};

CopyBoldFilled32.category = 'Interface General';

export default CopyBoldFilled32;

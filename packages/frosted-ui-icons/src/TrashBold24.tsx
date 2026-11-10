import * as React from 'react';
import { IconProps } from './types';

export const TrashBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TrashBold24"
      {...props}
    >
      <path
        d="M16.262 6l-.89-1.871C14.751 2.829 13.44 2 12 2s-2.752.828-3.372 2.129L7.738 6m8.524 0H7.737m8.525 0h3.357M7.737 6H4.381M2.73 6h1.65m0 0l1.605 13.48c.17 1.438 1.39 2.52 2.837 2.52h6.354c1.447 0 2.666-1.082 2.837-2.52L19.619 6m0 0h1.649"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TrashBold24.category = 'Interface General';

export default TrashBold24;

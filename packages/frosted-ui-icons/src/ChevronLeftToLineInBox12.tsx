import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftToLineInBox12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftToLineInBox12"
      {...props}
    >
      <path
        d="M8.25 0C10.32 0 12 1.679 12 3.75v4.5c0 2.07-1.679 3.749-3.75 3.749h-4.5c-2.07 0-3.749-1.679-3.749-3.75v-4.5C.001 1.68 1.68 0 3.751 0h4.5zm-4.5 1.5C2.509 1.5 1.5 2.507 1.5 3.75v4.5c0 1.242 1.008 2.25 2.25 2.25h4.5c1.243-.001 2.25-1.008 2.25-2.25v-4.5c0-1.243-1.007-2.25-2.25-2.25h-4.5zm0 1.5c.414 0 .75.336.75.75v4.5c0 .413-.336.75-.75.75S3 8.662 3 8.25v-4.5c0-.414.336-.75.75-.75zm3.939.252c.275-.31.749-.338 1.058-.063.31.275.338.75.063 1.059L7.252 6 8.81 7.75c.275.31.247.784-.063 1.059-.31.275-.783.247-1.058-.063l-2-2.25c-.252-.284-.252-.711 0-.995l2-2.25z"
        fill={color}
      />
    </svg>
  );
};

ChevronLeftToLineInBox12.category = 'Interface General';

export default ChevronLeftToLineInBox12;

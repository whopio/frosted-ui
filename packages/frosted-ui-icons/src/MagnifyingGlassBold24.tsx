import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MagnifyingGlassBold24"
      {...props}
    >
      <path
        d="M10 .998c4.97 0 9 4.03 9 9 0 2.125-.74 4.077-1.972 5.616l5.675 5.673c.39.39.39 1.024 0 1.414-.39.39-1.023.39-1.414 0l-5.675-5.673c-1.54 1.231-3.49 1.97-5.614 1.97-4.97 0-9-4.03-9-9s4.03-9 9-9zm0 2c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MagnifyingGlassBold24.category = 'Interface General';

export default MagnifyingGlassBold24;

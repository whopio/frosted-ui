import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatDownBold32"
      {...props}
    >
      <path
        d="M9 3.993v11.476c0 .293-.238.531-.531.531H3.955c-.7 0-1.06.836-.58 1.345l11.466 12.13c.63.665 1.688.665 2.318 0l11.465-12.13c.48-.509.12-1.345-.579-1.345h-4.514c-.293 0-.531-.238-.531-.531V3.993C23 2.893 22.108 2 21.007 2H10.993C9.893 2 9 2.892 9 3.993z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDownBold32.category = 'Arrows';

export default ArrowFatDownBold32;

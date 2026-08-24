import * as React from 'react';
import { IconProps } from './types';

export const Linkedin12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Linkedin12"
      {...props}
    >
      <path
        d="M10.26 1H1.738C1.33 1 1 1.322 1 1.72v8.557c0 .399.33.723.738.723h8.522c.408 0 .74-.324.74-.72V1.72c0-.398-.332-.72-.74-.72zM3.967 9.521H2.482V4.748h1.485v4.773zm-.742-5.423c-.477 0-.862-.385-.862-.86 0-.474.385-.86.862-.86.474 0 .859.386.859.86 0 .473-.385.86-.86.86zM9.52 9.52H8.04v-2.32c0-.553-.01-1.265-.771-1.265-.772 0-.89.603-.89 1.226v2.36h-1.48V4.747H6.32V5.4h.02c.197-.375.681-.771 1.402-.771 1.502 0 1.78.988 1.78 2.273v2.62z"
        fill={color}
      />
    </svg>
  );
};

Linkedin12.category = 'Social & Brands';

export default Linkedin12;

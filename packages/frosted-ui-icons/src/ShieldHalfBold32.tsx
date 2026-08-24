import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfBold32"
      {...props}
    >
      <path
        d="M14.665.25c.859-.333 1.811-.333 2.67 0l10.308 3.997C29.063 4.798 30 6.166 30 7.69v9.88c0 4.204-3.075 7.614-6.082 9.972-3.057 2.396-6.33 3.928-7.262 4.342-.422.188-.89.188-1.312 0-.931-.413-4.205-1.946-7.262-4.342C5.075 25.184 2 21.774 2 17.569V7.69c0-1.524.936-2.892 2.357-3.443L14.665.25zM5.081 6.112C4.43 6.365 4 6.992 4 7.69v9.88c0 3.22 2.4 6.111 5.316 8.398 2.087 1.635 4.299 2.849 5.684 3.539V2.264L5.081 6.112zM17 29.507c1.385-.69 3.597-1.904 5.684-3.54C25.6 23.681 28 20.791 28 17.57V7.69c0-.698-.43-1.325-1.081-1.578L17 2.264v27.243z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfBold32.category = 'Security';

export default ShieldHalfBold32;

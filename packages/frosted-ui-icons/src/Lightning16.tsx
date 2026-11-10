import * as React from 'react';
import { IconProps } from './types';

export const Lightning16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Lightning16"
      {...props}
    >
      <path
        d="M10.888 0c.806 0 1.338.84.992 1.57L10.013 5.5h2.796c.936 0 1.442 1.096.837 1.81l-7.04 8.293c-.726.855-2.115.202-1.92-.902L5.609 9.5H3.23c-.745 0-1.274-.727-1.044-1.437L4.498.921l.037-.102C4.74.327 5.223 0 5.764 0h5.124zM3.78 8h2.514c.575 0 1.01.52.91 1.086L6.422 13.5 11.94 7H9.102c-.68 0-1.126-.707-.835-1.32l1.985-4.18H5.887L3.78 8z"
        fill={color}
      />
    </svg>
  );
};

Lightning16.category = 'Nature & Weather';

export default Lightning16;

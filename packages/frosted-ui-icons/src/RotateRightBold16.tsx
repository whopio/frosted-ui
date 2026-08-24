import * as React from 'react';
import { IconProps } from './types';

export const RotateRightBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateRightBold16"
      {...props}
    >
      <path
        d="M8 .5c2.176 0 4.134.927 5.504 2.406.047-.508.475-.906.996-.906.552 0 1 .448 1 1v3c0 .552-.448 1-1 1h-3c-.552 0-1-.448-1-1s.448-1 1-1h1.11C11.628 3.495 9.93 2.5 8 2.5c-2.446 0-4.521 1.597-5.235 3.808C2.593 6.839 2.5 7.408 2.5 8c0 .592.093 1.16.265 1.692C3.479 11.902 5.555 13.5 8 13.5c2.446 0 4.521-1.597 5.235-3.808.17-.525.734-.813 1.26-.643.525.17.812.733.643 1.259-.973 3.011-3.8 5.192-7.138 5.192S1.835 13.32.862 10.308C.627 9.579.5 8.803.5 8c0-.803.127-1.58.362-2.308C1.835 2.681 4.662.5 8 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateRightBold16.category = 'Arrows';

export default RotateRightBold16;

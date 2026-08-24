import * as React from 'react';
import { IconProps } from './types';

export const CursorBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CursorBoldFilled24"
      {...props}
    >
      <path
        d="M23 20.41c0 1.43-1.16 2.59-2.59 2.59-.688 0-1.347-.273-1.833-.759l-4.392-4.392-2.553 4.112c-.962 1.55-3.282 1.323-3.927-.383L1.16 4.253C.43 2.321 2.32.431 4.253 1.16l17.325 6.545c1.706.645 1.932 2.965.383 3.927l-4.112 2.553 4.392 4.392c.486.486.76 1.145.76 1.832z"
        fill={color}
      />
    </svg>
  );
};

CursorBoldFilled24.category = 'Arrows';

export default CursorBoldFilled24;

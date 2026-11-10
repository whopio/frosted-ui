import * as React from 'react';
import { IconProps } from './types';

export const CursorBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CursorBold16"
      {...props}
    >
      <path
        d="M2.057 3.756l3.05 9.47c.31.965 1.65 1.03 2.055.1l.752-1.73c.282-.646 1.126-.806 1.625-.307l2.349 2.349c.232.232.546.362.875.362.683 0 1.237-.554 1.237-1.237 0-.329-.13-.643-.362-.875l-2.35-2.35c-.498-.498-.338-1.342.309-1.624l1.73-.752c.93-.404.864-1.745-.102-2.056l-9.47-3.05c-1.046-.336-2.035.653-1.698 1.7z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

CursorBold16.category = 'Arrows';

export default CursorBold16;

import * as React from 'react';
import { IconProps } from './types';

export const EyeFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="EyeFilled16"
      {...props}
    >
      <path
        d="M8 2c2.576 0 4.51 1.33 5.796 2.656 1.285 1.324 1.988 2.707 2.12 2.978.113.233.113.499 0 .732-.132.272-.835 1.654-2.12 2.978-1.286 1.325-3.22 2.657-5.796 2.657s-4.51-1.332-5.796-2.657C.92 10.02.217 8.64.085 8.366c-.113-.233-.113-.499 0-.732l.206-.393c.313-.566.95-1.592 1.913-2.585C3.49 3.33 5.424 2 8 2zm.001 3c-1.657 0-3 1.344-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.656-1.343-3-3-3zm0 1.5c.828 0 1.5.672 1.5 1.5 0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

EyeFilled16.category = 'Accessibility';

export default EyeFilled16;

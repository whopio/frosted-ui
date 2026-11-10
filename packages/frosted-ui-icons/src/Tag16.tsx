import * as React from 'react';
import { IconProps } from './types';

export const Tag16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Tag16"
      {...props}
    >
      <path
        d="M12.26.991c1.52 0 2.75 1.232 2.75 2.75v3.5c0 .994-.395 1.947-1.098 2.65L9.894 13.91c-1.465 1.464-3.839 1.464-5.303 0l-2.5-2.499c-1.464-1.464-1.464-3.84 0-5.304l4.02-4.017C6.813 1.386 7.767.99 8.76.99h3.5zm-3.498 1.5c-.597 0-1.17.238-1.591.66L3.152 7.166c-.879.879-.878 2.304 0 3.183l2.5 2.499c.878.878 2.302.878 3.181 0l4.019-4.018c.421-.422.659-.994.659-1.59v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5zM10.25 4c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75S8.5 6.716 8.5 5.75 9.284 4 10.25 4z"
        fill={color}
      />
    </svg>
  );
};

Tag16.category = 'Interface General';

export default Tag16;

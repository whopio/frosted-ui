import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromBracketFilled16"
      {...props}
    >
      <path
        d="M13.75 8.75c.69 0 1.25.56 1.25 1.25v.75c0 2.347-1.903 4.25-4.25 4.25h-5.5C2.903 15 1 13.097 1 10.75V10c0-.69.56-1.25 1.25-1.25S3.5 9.31 3.5 10v.75c0 .966.784 1.75 1.75 1.75h5.5c.966 0 1.75-.784 1.75-1.75V10c0-.69.56-1.25 1.25-1.25zM9.866 1.366c.488-.488 1.28-.488 1.768 0l2 2c.488.488.488 1.28 0 1.768l-2 2c-.488.488-1.28.488-1.768 0-.446-.447-.483-1.145-.114-1.634H9.75C8.784 5.5 8 6.283 8 7.25v2.5C8 10.44 7.44 11 6.75 11S5.5 10.44 5.5 9.75v-2.5C5.5 4.903 7.403 3 9.75 3h.002c-.369-.49-.332-1.188.114-1.634z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketFilled16.category = 'Arrows';

export default ArrowUpRightFromBracketFilled16;

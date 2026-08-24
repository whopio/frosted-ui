import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromBracketBoldFilled12"
      {...props}
    >
      <path
        d="M10.75 6.25c.69 0 1.25.56 1.25 1.25v.75C12 10.321 10.321 12 8.25 12h-4.5C1.679 12 0 10.321 0 8.25V7.5c0-.69.56-1.25 1.25-1.25S2.5 6.81 2.5 7.5v.75c0 .69.56 1.25 1.25 1.25h4.5c.69 0 1.25-.56 1.25-1.25V7.5c0-.69.56-1.25 1.25-1.25zM6.866.366c.488-.488 1.28-.488 1.768 0l2 2c.488.488.488 1.28 0 1.768l-2 2c-.488.488-1.28.488-1.768 0-.446-.446-.483-1.144-.114-1.634H6.75c-.414 0-.75.336-.75.75V7.5c0 .69-.56 1.25-1.25 1.25S3.5 8.19 3.5 7.5V5.25C3.5 3.455 4.955 2 6.75 2h.002C6.383 1.51 6.42.812 6.866.366z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketBoldFilled12.category = 'Arrows';

export default ArrowUpRightFromBracketBoldFilled12;

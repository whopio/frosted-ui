import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracketBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22 12.2498C22.5523 12.2498 23 12.6976 23 13.2498V15.9998C23 19.8658 19.866 22.9998 16 22.9998H8C4.13401 22.9998 1 19.8658 1 15.9998V13.2498C1.00005 12.6976 1.44775 12.2498 2 12.2498C2.55225 12.2498 2.99995 12.6976 3 13.2498V15.9998C3 18.7612 5.23858 20.9998 8 20.9998H16C18.7614 20.9998 21 18.7612 21 15.9998V13.2498C21 12.6976 21.4477 12.2498 22 12.2498ZM10.9395 1.43927C11.5252 0.853573 12.4748 0.853584 13.0605 1.43927L18.9141 7.29278C19.3046 7.68328 19.3045 8.31632 18.9141 8.70684C18.5235 9.09729 17.8905 9.09735 17.5 8.70684L13 4.20684V14.9998C13 15.5521 12.5523 15.9998 12 15.9998C11.4478 15.9997 11 15.5521 11 14.9998V4.20684L6.5 8.70684C6.10948 9.09737 5.47646 9.09737 5.08594 8.70684C4.69544 8.31632 4.69542 7.6833 5.08594 7.29278L10.9395 1.43927Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracketBold24.category = 'Arrows';

export default ArrowUpFromBracketBold24;

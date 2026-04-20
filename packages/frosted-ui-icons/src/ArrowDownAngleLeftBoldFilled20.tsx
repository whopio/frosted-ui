import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.5 2.25C18.3284 2.25 19 2.92157 19 3.75V10.6875C19 12.3789 17.6289 13.75 15.9375 13.75H6.29395L7.52637 14.9053C8.1307 15.4719 8.16131 16.422 7.59473 17.0264C7.02813 17.6307 6.07799 17.6613 5.47363 17.0947L1.47363 13.3447C1.17118 13.0612 1 12.6646 1 12.25C1 11.8354 1.17118 11.4388 1.47363 11.1553L5.47363 7.40527C6.07799 6.83869 7.02813 6.8693 7.59473 7.47363C8.16131 8.07799 8.1307 9.02813 7.52637 9.59473L6.29395 10.75H15.9375C15.972 10.75 16 10.722 16 10.6875V3.75C16 2.92157 16.6716 2.25 17.5 2.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleLeftBoldFilled20.category = 'Arrows';

export default ArrowDownAngleLeftBoldFilled20;

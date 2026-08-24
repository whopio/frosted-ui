import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsVerticalBoldFilled24"
      {...props}
    >
      <path
        d="M9.263 19.683c.14-1.387 1.313-2.468 2.737-2.469 1.519 0 2.75 1.232 2.75 2.75 0 1.424-1.082 2.597-2.469 2.738l-.281.013-.281-.013c-1.387-.141-2.47-1.314-2.47-2.738l.014-.28zm0-7.965C9.403 10.332 10.576 9.25 12 9.25c1.519 0 2.75 1.23 2.75 2.75 0 1.424-1.082 2.596-2.469 2.737L12 14.75l-.281-.014c-1.387-.141-2.47-1.313-2.47-2.738l.014-.28zm0-7.964c.14-1.386 1.313-2.468 2.737-2.468 1.519 0 2.75 1.23 2.75 2.75 0 1.424-1.082 2.596-2.469 2.737L12 6.787l-.281-.014c-1.387-.14-2.47-1.313-2.47-2.737l.014-.282z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ThreeDotsVerticalBoldFilled24.category = 'Interface General';

export default ThreeDotsVerticalBoldFilled24;

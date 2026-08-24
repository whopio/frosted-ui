import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkBoldFilled16"
      {...props}
    >
      <path
        d="M13.234 3.05c.586-.586 1.536-.586 2.121 0 .586.586.586 1.535 0 2.121l-8.662 8.662c-.281.281-.663.44-1.06.44-.398 0-.78-.159-1.06-.44L.688 9.95c-.585-.585-.585-1.535 0-2.12.586-.587 1.536-.587 2.121 0l2.823 2.821 7.601-7.601z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkBoldFilled16.category = 'Checkmarks';

export default CheckmarkBoldFilled16;

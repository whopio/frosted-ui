import * as React from 'react';
import { IconProps } from './types';

export const Lock16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.25 7.25H3.75M12.25 7.25C13.3546 7.25 14.25 8.14543 14.25 9.25V13.25C14.25 14.3546 13.3546 15.25 12.25 15.25H3.75C2.64543 15.25 1.75 14.3546 1.75 13.25V9.25C1.75 8.14543 2.64543 7.25 3.75 7.25M12.25 7.25V5C12.25 2.65279 10.3472 0.75 8 0.75C5.65279 0.75 3.75 2.65279 3.75 5V7.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Lock16;

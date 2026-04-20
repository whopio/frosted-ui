import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.5 1C14.8472 1 16.75 2.90279 16.75 5.25V14.75C16.75 17.0972 14.8472 19 12.5 19H7.5C5.15279 19 3.25 17.0972 3.25 14.75V5.25C3.25 2.90279 5.15279 1 7.5 1H12.5ZM7.5 3C6.25736 3 5.25 4.00736 5.25 5.25V14.75C5.25 15.9926 6.25736 17 7.5 17H12.5C13.7426 17 14.75 15.9926 14.75 14.75V5.25C14.75 4.00736 13.7426 3 12.5 3H7.5ZM11.75 14C12.3023 14 12.75 14.4477 12.75 15C12.75 15.5523 12.3023 16 11.75 16H8.25C7.69772 16 7.25 15.5523 7.25 15C7.25 14.4477 7.69772 14 8.25 14H11.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MobilePhoneBold20.category = 'Objects';

export default MobilePhoneBold20;

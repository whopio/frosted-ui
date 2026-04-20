import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 14.9998C3.23858 14.9998 1 12.7612 1 9.99976C1.00016 7.23847 3.23868 4.99976 6 4.99976H9.87891L8.43945 3.5603C7.85391 2.9745 7.85375 2.02491 8.43945 1.43921C9.02516 0.853504 9.97474 0.853666 10.5605 1.43921L14.5605 5.43921C14.8417 5.72044 14.9999 6.10208 15 6.49976C15 6.89753 14.8418 7.27903 14.5605 7.5603L10.8105 11.3103C10.2248 11.8959 9.27522 11.8959 8.68945 11.3103C8.10395 10.7245 8.10384 9.77491 8.68945 9.18921L9.87891 7.99976H6C4.89553 7.99976 4.00016 8.89532 4 9.99976C4 11.1043 4.89543 11.9998 6 11.9998H7C7.82828 11.9998 8.49984 12.6715 8.5 13.4998C8.5 14.3281 7.82838 14.9997 7 14.9998H6Z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRightBoldFilled16.category = 'Arrows';

export default RoundedArrowAngleRightBoldFilled16;

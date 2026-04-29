import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.998 10.3496C15.998 12.0893 14.5873 13.5 12.8477 13.5H3.15039C1.41069 13.5 0 12.0893 0 10.3496V7H15.998V10.3496ZM4.22852 9.5C3.81443 9.50015 3.47852 9.83588 3.47852 10.25C3.47852 10.6641 3.81443 10.9998 4.22852 11H7.12793C7.54214 11 7.87793 10.6642 7.87793 10.25C7.87793 9.83579 7.54214 9.5 7.12793 9.5H4.22852ZM12.8477 2.5C14.5369 2.50003 15.9156 3.83014 15.9941 5.5H0.00390625C0.0824257 3.83012 1.46111 2.5 3.15039 2.5H12.8477Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardFilled16.category = 'Money & Shopping';

export default CreditCardFilled16;

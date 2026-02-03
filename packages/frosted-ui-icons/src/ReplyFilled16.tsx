import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.99952 2.91371C7.99952 2.19279 7.14619 1.81199 6.60963 2.2935L0.942025 7.37983C0.573035 7.71096 0.573037 8.28909 0.942025 8.62023L6.60963 13.7065C7.14619 14.188 7.99952 13.8072 7.99952 13.0863V10.8366C10.4952 10.87 11.8011 11.1578 12.5869 11.602C13.3834 12.0522 13.7012 12.6878 14.2031 13.6917L14.219 13.7236C14.3227 13.931 14.5554 14.0399 14.7811 13.9866C15.0068 13.9334 15.1662 13.7319 15.1662 13.5C15.1662 10.6564 14.7983 8.52996 13.5857 7.13089C12.4279 5.79493 10.6041 5.23407 7.99952 5.17245V2.91371Z"
        fill={color}
      />
    </svg>
  );
};

ReplyFilled16.category = 'Arrows';

export default ReplyFilled16;

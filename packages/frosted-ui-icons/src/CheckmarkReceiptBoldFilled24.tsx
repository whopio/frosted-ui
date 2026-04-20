import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18 0.00012207C20.2091 0.00012207 22 1.79098 22 4.00012V22.007C21.9996 23.2104 20.7205 23.983 19.6553 23.423L16.2432 21.6271L12.7979 23.4581C12.2987 23.7233 11.7001 23.7227 11.2012 23.4572L7.76367 21.6281L4.34375 23.424C3.2784 23.9833 2.00009 23.2102 2 22.007V4.00012C2 1.79098 3.79086 0.00012207 6 0.00012207H18ZM17.0781 6.79309C16.6877 6.40262 16.0546 6.40274 15.6641 6.79309L10.3877 12.0685L8.47363 10.0607C8.09269 9.66099 7.46035 9.64576 7.06055 10.0265C6.66081 10.4075 6.64546 11.0398 7.02637 11.4396L9.64746 14.1896C9.83329 14.3844 10.0901 14.4969 10.3594 14.5001C10.6285 14.5032 10.8878 14.3975 11.0781 14.2072L17.0781 8.20715C17.4684 7.8167 17.4683 7.18358 17.0781 6.79309Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkReceiptBoldFilled24.category = 'Money & Shopping';

export default CheckmarkReceiptBoldFilled24;

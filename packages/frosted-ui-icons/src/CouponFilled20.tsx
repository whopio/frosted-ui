import * as React from 'react';
import { IconProps } from './types';

export const CouponFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.55469 0C7.09727 0.000158492 7.50964 0.33507 7.71094 0.737305L7.78418 0.913086L7.84863 1.08203C8.20253 1.91458 9.03189 2.5 10 2.5L10.1914 2.49219C11.1394 2.41575 11.9266 1.77683 12.2158 0.913086L12.2891 0.737305C12.4904 0.335071 12.9027 0.000158786 13.4453 0H15.5C16.8807 0 18 1.11929 18 2.5V17.5C18 18.8807 16.8807 20 15.5 20H13.4453C12.8253 19.9998 12.375 19.5624 12.2158 19.0869C11.9266 18.2232 11.1394 17.5842 10.1914 17.5078L10 17.5C8.96759 17.5 8.09263 18.1656 7.78418 19.0869C7.62504 19.5624 7.17474 19.9998 6.55469 20H4.5C3.11929 20 2 18.8807 2 17.5V2.5C2 1.11929 3.11929 0 4.5 0H6.55469Z"
        fill={color}
      />
    </svg>
  );
};

CouponFilled20.category = 'Money & Shopping';

export default CouponFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const CouponActiveFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CouponActiveFilled20"
      {...props}
    >
      <path
        d="M6.555 0c.542 0 .955.335 1.156.737l.073.176.065.169C8.203 1.915 9.032 2.5 10 2.5l.191-.008c.948-.076 1.736-.715 2.025-1.579l.073-.176C12.49.335 12.903 0 13.445 0H15.5C16.88 0 18 1.12 18 2.5v15c0 1.38-1.12 2.5-2.5 2.5h-2.055c-.62 0-1.07-.438-1.23-.913-.288-.864-1.076-1.503-2.024-1.58L10 17.5c-1.032 0-1.907.666-2.216 1.587-.159.475-.61.913-1.23.913H4.5C3.12 20 2 18.88 2 17.5v-15C2 1.12 3.12 0 4.5 0h2.055zm7.475 5.97c-.293-.293-.767-.293-1.06 0l-7 7c-.293.293-.293.767 0 1.06.293.293.767.293 1.06 0l7-7c.293-.293.293-.767 0-1.06zm-1.28 5.28c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-5.5-5.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

CouponActiveFilled20.category = 'Money & Shopping';

export default CouponActiveFilled20;

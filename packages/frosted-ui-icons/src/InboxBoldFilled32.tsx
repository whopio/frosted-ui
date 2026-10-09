import * as React from 'react';
import { IconProps } from './types';

export const InboxBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InboxBoldFilled32"
      {...props}
    >
      <path
        d="M23.036 1.75c2.922 0 5.422 2.1 5.927 4.978l1.858 10.598c.12.68.179 1.367.179 2.057v4.85c0 3.323-2.694 6.017-6.018 6.017H7.018C3.695 30.25 1 27.555 1 24.232v-4.85c0-.689.06-1.377.179-2.056L3.037 6.728C3.542 3.85 6.042 1.75 8.964 1.75h14.072zm-14.072 2c-1.95 0-3.62 1.402-3.957 3.323L3.148 17.672c-.019.109-.034.218-.05.328h7.293c.99 0 1.734.698 2.017 1.468.38 1.035 1.305 2.606 3.583 2.606 2.28 0 3.204-1.571 3.584-2.606.283-.77 1.028-1.468 2.017-1.468h7.31c-.015-.11-.031-.22-.05-.328L26.993 7.073c-.337-1.921-2.006-3.323-3.957-3.323H8.964z"
        fill={color}
      />
    </svg>
  );
};

InboxBoldFilled32.category = 'Interface General';

export default InboxBoldFilled32;

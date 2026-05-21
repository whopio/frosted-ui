import * as React from 'react';
import { IconProps } from './types';

export const BountiesBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6ZM16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23C12.134 23 9 19.866 9 16C9 12.134 12.134 9 16 9ZM16 13.2998C14.6021 13.2998 13.4519 14.3623 13.3135 15.7236L13.2998 16L13.3135 16.2754C13.4515 17.6371 14.6019 18.7002 16 18.7002C17.491 18.7001 18.7001 17.491 18.7002 16C18.7001 14.6019 17.6371 13.4515 16.2754 13.3135L16 13.2998Z"
        fill={color}
      />
    </svg>
  );
};

BountiesBoldFilled32.category = 'Interface General';

export default BountiesBoldFilled32;

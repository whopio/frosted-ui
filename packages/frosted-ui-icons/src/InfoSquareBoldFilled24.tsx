import * as React from 'react';
import { IconProps } from './types';

export const InfoSquareBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.25 1C19.9779 1 23 4.02208 23 7.75V16.25C23 19.9779 19.9779 23 16.25 23H7.75C4.02208 23 1 19.9779 1 16.25V7.75C1 4.02208 4.02208 1 7.75 1H16.25ZM12.001 10.25C11.3107 10.25 10.7512 10.8098 10.751 11.5V17C10.7512 17.6902 11.3107 18.25 12.001 18.25C12.691 18.2497 13.2508 17.69 13.251 17V11.5C13.2508 10.81 12.691 10.2503 12.001 10.25ZM12 5.75C11.3098 5.75 10.7502 6.30981 10.75 7C10.7502 7.69019 11.3098 8.25 12 8.25C12.6902 8.25 13.2498 7.69019 13.25 7C13.2498 6.30981 12.6902 5.75 12 5.75Z"
        fill={color}
      />
    </svg>
  );
};

InfoSquareBoldFilled24.category = 'Interface General';

export default InfoSquareBoldFilled24;

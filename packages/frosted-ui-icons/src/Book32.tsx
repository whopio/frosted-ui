import * as React from 'react';
import { IconProps } from './types';

export const Book32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 6C12.1987 2.19868 5.68799 2.00987 1.40295 5.43356C0.972122 5.77779 0.75 6.30244 0.75 6.8539V27.6946C0.75 28.571 1.84176 29.0581 2.59247 28.6059C6.82183 26.0583 12.5359 26.4354 16 29.25C19.4641 26.4355 25.1782 26.0583 29.4075 28.6059C30.1582 29.0581 31.25 28.5619 31.25 27.6856V6.86415C31.25 6.31269 31.0279 5.77779 30.597 5.43356C26.312 2.00987 19.8013 2.19868 16 6ZM16 6L16 27.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Book32;

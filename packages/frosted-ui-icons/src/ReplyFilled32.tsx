import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReplyFilled32"
      {...props}
    >
      <path
        d="M15.5 10.009c6.482.14 10.414 2.123 12.695 5.245 2.329 3.188 2.804 7.4 2.804 11.496 0 .312-.193.592-.485.702-.292.11-.623.027-.829-.208-4.302-4.917-9.05-5.225-14.186-5.243v4.77c0 1.312-1.566 1.991-2.524 1.094L1.666 17.277c-.738-.691-.738-1.863 0-2.554L12.975 4.135c.958-.897 2.524-.218 2.524 1.094v4.78z"
        fill={color}
      />
    </svg>
  );
};

ReplyFilled32.category = 'Arrows';

export default ReplyFilled32;

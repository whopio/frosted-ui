import * as React from 'react';
import { IconProps } from './types';

export const Copy16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Copy16"
      {...props}
    >
      <path
        d="M12.45 5C13.858 5 15 6.142 15 7.55v4.9c0 1.408-1.142 2.55-2.55 2.55h-4.9C6.142 15 5 13.858 5 12.45v-4.9C5 6.142 6.142 5 7.55 5h4.9zm-4.9 1.5c-.58 0-1.05.47-1.05 1.05v4.9c0 .58.47 1.05 1.05 1.05h4.9c.58 0 1.05-.47 1.05-1.05v-4.9c0-.58-.47-1.05-1.05-1.05h-4.9zM8.5 1c1.262 0 2.306.936 2.476 2.151.026.192-.133.349-.326.349h-.8c-.193 0-.344-.161-.41-.343-.14-.383-.508-.657-.94-.657H3.55c-.58 0-1.05.47-1.05 1.05V8.5c0 .432.274.8.657.94.182.066.343.217.343.41v.8c0 .193-.157.352-.349.326C1.936 10.806 1 9.762 1 8.5V3.55C1 2.142 2.142 1 3.55 1H8.5z"
        fill={color}
      />
    </svg>
  );
};

Copy16.category = 'Interface General';

export default Copy16;

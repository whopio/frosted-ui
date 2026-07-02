import * as React from 'react';
import { IconProps } from './types';

export const PlayBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.75 5.06272C5.7502 1.82664 9.39298 -0.0695851 12.0439 1.78635L27.6641 12.7239C29.938 14.3164 29.9382 17.6842 27.6641 19.2766L12.0439 30.2141C9.39292 32.0699 5.75 30.1729 5.75 26.9367V5.06272Z"
        fill={color}
      />
    </svg>
  );
};

PlayBoldFilled32.category = 'Sound & Music';

export default PlayBoldFilled32;

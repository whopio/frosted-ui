import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FacebookFilled12"
      {...props}
    >
      <path
        d="M4.55 11.867V7.862H3.312v-1.84H4.55v-.793c0-2.05.924-2.999 2.928-2.999.38 0 1.035.075 1.304.15v1.666c-.142-.014-.39-.021-.694-.021-.984 0-1.363.373-1.363 1.346v.65h1.96l-.335 1.84H6.727V12C9.698 11.639 12 9.1 12 6.022 12 2.696 9.314 0 6 0S0 2.696 0 6.022c0 2.824 1.937 5.194 4.55 5.845z"
        fill={color}
      />
    </svg>
  );
};

FacebookFilled12.category = 'Social & Brands';

export default FacebookFilled12;

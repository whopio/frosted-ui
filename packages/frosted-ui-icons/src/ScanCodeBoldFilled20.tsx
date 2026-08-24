import * as React from 'react';
import { IconProps } from './types';

export const ScanCodeBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ScanCodeBoldFilled20"
      {...props}
    >
      <path
        d="M2 11.5c.552 0 1 .448 1 1V14c0 1.657 1.343 3 3 3h1.5c.552 0 1 .448 1 1s-.448 1-1 1H6c-2.761 0-5-2.239-5-5v-1.5c0-.552.448-1 1-1zm16 0c.552 0 1 .448 1 1V14c0 2.761-2.239 5-5 5h-1.5c-.552 0-1-.448-1-1s.448-1 1-1H14c1.657 0 3-1.343 3-3v-1.5c0-.552.448-1 1-1zm-10.5-1c1.105 0 2 .895 2 2v1.25c0 1.105-.895 2-2 2H6.25c-1.105 0-2-.895-2-2V12.5c0-1.105.895-2 2-2H7.5zm6.25 0c1.105 0 2 .895 2 2v1.25c0 1.105-.895 2-2 2H12.5c-1.105 0-2-.895-2-2V12.5c0-1.105.895-2 2-2h1.25zM7.5 4.25c1.105 0 2 .895 2 2V7.5c0 1.105-.895 2-2 2H6.25c-1.105 0-2-.895-2-2V6.25c0-1.105.895-2 2-2H7.5zm6.25 0c1.105 0 2 .895 2 2V7.5c0 1.105-.895 2-2 2H12.5c-1.105 0-2-.895-2-2V6.25c0-1.105.895-2 2-2h1.25zM7.5 1c.552 0 1 .448 1 1s-.448 1-1 1H6C4.343 3 3 4.343 3 6v1.5c0 .552-.448 1-1 1s-1-.448-1-1V6c0-2.761 2.239-5 5-5h1.5zM14 1c2.761 0 5 2.239 5 5v1.5c0 .552-.448 1-1 1s-1-.448-1-1V6c0-1.657-1.343-3-3-3h-1.5c-.552 0-1-.448-1-1s.448-1 1-1H14z"
        fill={color}
      />
    </svg>
  );
};

ScanCodeBoldFilled20.category = 'Communication';

export default ScanCodeBoldFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const PauseCircleBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PauseCircleBold32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zm0 2C8.544 2.5 2.5 8.544 2.5 16S8.544 29.5 16 29.5 29.5 23.456 29.5 16 23.456 2.5 16 2.5zm-4 7.25c.552 0 1 .448 1 1v10.5c0 .552-.448 1-1 1s-1-.448-1-1v-10.5c0-.552.448-1 1-1zm8 0c.552 0 1 .448 1 1v10.5c0 .552-.448 1-1 1s-1-.448-1-1v-10.5c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

PauseCircleBold32.category = 'Sound & Music';

export default PauseCircleBold32;

import * as React from 'react';
import { IconProps } from './types';

export const LogoutFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LogoutFilled12"
      {...props}
    >
      <path
        d="M6.25 0c1.34 0 2.513.703 3.177 1.759-.633-.05-1.283.166-1.768.65-.375.376-.589.851-.643 1.341H5.75C4.507 3.75 3.5 4.757 3.5 6s1.007 2.25 2.25 2.25h1.266c.054.49.268.965.643 1.34.485.485 1.135.7 1.768.65C8.763 11.297 7.59 12 6.25 12h-2.5C1.679 12 0 10.321 0 8.25v-4.5C0 1.679 1.679 0 3.75 0h2.5zm2.47 3.47c.293-.293.767-.293 1.06 0l2 2c.293.293.293.767 0 1.06l-2 2c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l.72-.72H5.75C5.336 6.75 5 6.414 5 6s.336-.75.75-.75h3.69l-.72-.72c-.293-.293-.293-.767 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

LogoutFilled12.category = 'Interface General';

export default LogoutFilled12;

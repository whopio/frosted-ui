import * as React from 'react';
import { IconProps } from './types';

export const LogoutBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LogoutBoldFilled16"
      {...props}
    >
      <path
        d="M8.292 1c1.435 0 2.709.691 3.507 1.759-.763.047-1.513.36-2.097.943-.31.31-.543.667-.702 1.048H8C6.205 4.75 4.75 6.205 4.75 8S6.205 11.25 8 11.25h1c.159.381.392.738.702 1.048.584.583 1.334.895 2.097.942C11 14.308 9.727 15 8.292 15H5.375C2.959 15 1 13.041 1 10.625v-5.25C1 2.959 2.959 1 5.375 1h2.917zm2.648 3.94c.585-.586 1.535-.586 2.12 0l2 2c.282.28.44.662.44 1.06s-.158.78-.44 1.06l-2 2c-.585.586-1.535.586-2.12 0-.423-.422-.54-1.032-.353-1.56H8c-.828 0-1.5-.672-1.5-1.5S7.172 6.5 8 6.5h2.587c-.186-.528-.07-1.138.353-1.56z"
        fill={color}
      />
    </svg>
  );
};

LogoutBoldFilled16.category = 'Interface General';

export default LogoutBoldFilled16;

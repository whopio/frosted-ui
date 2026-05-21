import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5ZM7.99707 7.25C8.54936 7.25 8.99707 7.69772 8.99707 8.25V11C8.99707 11.5523 8.54935 12 7.99707 12C7.44479 12 6.99707 11.5523 6.99707 11V8.25C6.99707 7.69772 7.44479 7.25 7.99707 7.25ZM8 4C8.55229 4 9 4.44772 9 5C9 5.55228 8.55229 6 8 6C7.44772 6 7 5.55228 7 5C7 4.44772 7.44772 4 8 4Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBold16.category = 'Interface General';

export default InfoCircleBold16;

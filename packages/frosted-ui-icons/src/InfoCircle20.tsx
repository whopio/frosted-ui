import * as React from 'react';
import { IconProps } from './types';

export const InfoCircle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.249 7.75C10.6632 7.75 10.999 8.08579 10.999 8.5V13.5H12.25C12.6642 13.5 13 13.8358 13 14.25C13 14.6642 12.6642 15 12.25 15H7.75C7.33579 15 7 14.6642 7 14.25C7 13.8358 7.33579 13.5 7.75 13.5H9.49902V9.25H7.75C7.33579 9.25 7 8.91421 7 8.5C7 8.08579 7.33579 7.75 7.75 7.75H10.249ZM10 4.5C10.5523 4.5 11 4.94772 11 5.5C11 6.05228 10.5523 6.5 10 6.5C9.44771 6.5 9 6.05228 9 5.5C9 4.94772 9.44771 4.5 10 4.5Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircle20.category = 'Interface General';

export default InfoCircle20;

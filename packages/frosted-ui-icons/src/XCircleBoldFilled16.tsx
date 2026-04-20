import * as React from 'react';
import { IconProps } from './types';

export const XCircleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM10.9521 4.98535C10.3664 4.39957 9.41586 4.39956 8.83008 4.98535L7.96875 5.84766L7.10742 4.98535C6.52164 4.39957 5.57114 4.39956 4.98535 4.98535C4.39957 5.57114 4.39957 6.52164 4.98535 7.10742L5.84766 7.96875L4.98535 8.83008C4.39957 9.41586 4.39957 10.3664 4.98535 10.9521C5.57114 11.5379 6.52164 11.5379 7.10742 10.9521L7.96875 10.0898L8.83008 10.9521C9.41586 11.5379 10.3664 11.5379 10.9521 10.9521C11.5379 10.3664 11.5379 9.41586 10.9521 8.83008L10.0898 7.96875L10.9521 7.10742C11.5379 6.52164 11.5379 5.57114 10.9521 4.98535Z"
        fill={color}
      />
    </svg>
  );
};

XCircleBoldFilled16.category = 'Interface General';

export default XCircleBoldFilled16;

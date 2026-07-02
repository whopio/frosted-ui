import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.9998 13.0127C14.9997 14.1103 14.11 15 13.0125 15C12.4854 15 11.9799 14.7906 11.6072 14.418L9.02517 11.836C8.89932 11.7104 8.68635 11.7529 8.61795 11.917L7.77908 13.9307C7.13728 15.4706 4.92682 15.3842 4.40701 13.7989L1.05642 3.58011C0.545988 2.02279 2.02254 0.546229 3.57986 1.05667L13.7986 4.40726C15.384 4.92707 15.4704 7.13753 13.9304 7.77933L11.9168 8.61819C11.7526 8.6866 11.7101 8.89957 11.8357 9.02542L14.4178 11.6075C14.7904 11.9802 14.9998 12.4857 14.9998 13.0127Z"
        fill={color}
      />
    </svg>
  );
};

CursorFilled16.category = 'Arrows';

export default CursorFilled16;

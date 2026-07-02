import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.9699 11.0785C12.9699 12.1231 12.1231 12.9699 11.0785 12.9699H10.9856C10.484 12.9699 10.0029 12.7704 9.64826 12.4158L7.80642 10.575C7.67429 10.4429 7.45155 10.4811 7.37155 10.6499L6.78576 11.887C6.03984 13.4617 3.7586 13.3372 3.18863 11.6906L0.143527 2.89415C-0.44667 1.18913 1.18914 -0.446669 2.89415 0.143527L11.6906 3.18863C13.3372 3.7586 13.4617 6.03984 11.887 6.78576L10.6499 7.37155C10.4811 7.45154 10.4429 7.67429 10.575 7.80642L12.4158 9.64826C12.7704 10.0029 12.9699 10.484 12.9699 10.9856V11.0785Z"
        fill={color}
      />
    </svg>
  );
};

CursorFilled12.category = 'Arrows';

export default CursorFilled12;

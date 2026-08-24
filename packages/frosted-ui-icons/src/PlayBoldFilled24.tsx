import * as React from 'react';
import { IconProps } from './types';

export const PlayBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayBoldFilled24"
      {...props}
    >
      <path
        d="M4 4.36C4 1.722 6.945.15 9.138 1.62l11.33 7.597c1.946 1.304 1.952 4.163.012 5.475l-11.332 7.66C6.957 23.835 4 22.265 4 19.619V4.361z"
        fill={color}
      />
    </svg>
  );
};

PlayBoldFilled24.category = 'Sound & Music';

export default PlayBoldFilled24;

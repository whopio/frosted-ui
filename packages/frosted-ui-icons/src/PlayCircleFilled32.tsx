import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM13.9395 9.3457C12.7745 8.6044 11.2503 9.44061 11.25 10.8213V21.1787C11.2503 22.5594 12.7745 23.3956 13.9395 22.6543L22.0771 17.4766C23.1576 16.7889 23.1576 15.2111 22.0771 14.5234L13.9395 9.3457Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleFilled32.category = 'Sound & Music';

export default PlayCircleFilled32;

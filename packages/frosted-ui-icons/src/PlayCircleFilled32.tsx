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
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM13.9395 9.3457C12.7745 8.6044 11.2503 9.44061 11.25 10.8213V21.1787C11.2503 22.5594 12.7745 23.3956 13.9395 22.6543L22.0771 17.4766C23.1576 16.7889 23.1576 15.2111 22.0771 14.5234L13.9395 9.3457Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleFilled32.category = 'Sound & Music';

export default PlayCircleFilled32;

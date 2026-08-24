import * as React from 'react';
import { IconProps } from './types';

export const HomeBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HomeBoldFilled24"
      {...props}
    >
      <path
        d="M8.265 2.447c2.117-1.927 5.353-1.927 7.47 0l5.662 5.151c1.02.93 1.603 2.247 1.603 3.628v7.846C23 21.242 21.24 23 19.071 23H16.5c-1.104 0-2-.896-2-2v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5V21c0 1.104-.895 2-2 2H4.929C2.759 23 1 21.24 1 19.072v-7.846c0-1.38.582-2.698 1.604-3.628l5.66-5.151z"
        fill={color}
      />
    </svg>
  );
};

HomeBoldFilled24.category = 'Buildings';

export default HomeBoldFilled24;

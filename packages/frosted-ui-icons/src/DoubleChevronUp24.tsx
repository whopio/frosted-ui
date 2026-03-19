import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUp24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M21.7196 14.2837C22.0124 14.5766 22.4871 14.5764 22.7801 14.2837C23.073 13.9909 23.0737 13.5161 22.7811 13.2231L12.952 3.39109C12.4251 2.86441 11.5706 2.86424 11.0438 3.39109L1.21467 13.2231C0.922011 13.5159 0.922182 13.9908 1.21467 14.2837C1.50757 14.5765 1.98236 14.5765 2.27522 14.2837L11.9969 4.55906L21.7196 14.2837ZM21.7196 20.7807C22.0124 21.0736 22.4872 21.0735 22.7801 20.7807C23.073 20.488 23.0737 20.0132 22.7811 19.7202L12.952 9.88817C12.4251 9.36127 11.5706 9.36124 11.0438 9.88817L1.21467 19.7202C0.921908 20.0131 0.921956 20.4879 1.21467 20.7807C1.50758 21.0736 1.98237 21.0736 2.27522 20.7807L11.9969 11.0561L21.7196 20.7807Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUp24.category = 'Arrows';

export default DoubleChevronUp24;

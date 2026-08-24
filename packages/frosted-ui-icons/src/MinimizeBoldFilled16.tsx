import * as React from 'react';
import { IconProps } from './types';

export const MinimizeBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinimizeBoldFilled16"
      {...props}
    >
      <path
        d="M6.5 8C7.328 8 8 8.672 8 9.5v4c0 .828-.672 1.5-1.5 1.5S5 14.328 5 13.5v-.379l-1.44 1.44c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.121L2.878 11H2.5C1.672 11 1 10.328 1 9.5S1.672 8 2.5 8h4zm5.94-6.56c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12L13.121 5h.379c.828 0 1.5.672 1.5 1.5S14.328 8 13.5 8h-4C8.672 8 8 7.328 8 6.5v-4C8 1.672 8.672 1 9.5 1s1.5.672 1.5 1.5v.379l1.44-1.44z"
        fill={color}
      />
    </svg>
  );
};

MinimizeBoldFilled16.category = 'Arrows';

export default MinimizeBoldFilled16;

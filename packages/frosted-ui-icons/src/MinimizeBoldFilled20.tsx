import * as React from 'react';
import { IconProps } from './types';

export const MinimizeBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinimizeBoldFilled20"
      {...props}
    >
      <path
        d="M8.5 10c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5S7 18.328 7 17.5v-2.379l-3.44 3.44c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.122L4.878 13H2.5c-.828 0-1.5-.672-1.5-1.5S1.672 10 2.5 10h6zm7.94-8.56c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12L15.122 7H17.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-6c-.828 0-1.5-.672-1.5-1.5v-6c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v2.379l3.44-3.44z"
        fill={color}
      />
    </svg>
  );
};

MinimizeBoldFilled20.category = 'Arrows';

export default MinimizeBoldFilled20;

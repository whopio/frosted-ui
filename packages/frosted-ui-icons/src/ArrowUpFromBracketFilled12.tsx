import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracketFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFromBracketFilled12"
      {...props}
    >
      <path
        d="M10.75 5.5c.69 0 1.25.56 1.25 1.25v1C12 10.097 10.097 12 7.75 12h-3.5C1.903 12 0 10.097 0 7.75v-1C0 6.06.56 5.5 1.25 5.5s1.25.56 1.25 1.25v1c0 .967.784 1.75 1.75 1.75h3.5c.966 0 1.75-.783 1.75-1.75v-1c0-.69.56-1.25 1.25-1.25zM4.94.44c.585-.586 1.535-.586 2.12 0l2.177 2.176c.488.488.488 1.28 0 1.768s-1.28.488-1.767 0l-.22-.22V6.75C7.25 7.44 6.69 8 6 8s-1.25-.56-1.25-1.25V4.164l-.22.22c-.488.488-1.28.488-1.767 0-.488-.488-.488-1.28 0-1.768L4.939.44z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracketFilled12.category = 'Arrows';

export default ArrowUpFromBracketFilled12;

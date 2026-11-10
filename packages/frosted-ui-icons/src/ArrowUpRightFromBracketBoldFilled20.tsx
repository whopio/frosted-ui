import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromBracketBoldFilled20"
      {...props}
    >
      <path
        d="M17.5 11.25c.828 0 1.5.672 1.5 1.5V14c0 2.762-2.239 5-5 5H6c-2.761 0-5-2.238-5-5v-1.25c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5V14c0 1.105.896 2 2 2h8c1.104 0 2-.895 2-2v-1.25c0-.828.672-1.5 1.5-1.5zm-5.06-9.81c.585-.586 1.535-.586 2.12 0l3 3c.586.586.586 1.535 0 2.121l-3 3c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.535 0-2.121l.439-.44H12c-1.105 0-2 .896-2 2v3.5c0 .829-.672 1.5-1.5 1.5S7 13.33 7 12.5V9c0-2.76 2.239-5 5-5h.879l-.44-.439c-.585-.586-.585-1.535 0-2.121z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromBracketBoldFilled20.category = 'Arrows';

export default ArrowUpRightFromBracketBoldFilled20;

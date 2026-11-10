import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracketBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFromBracketBoldFilled16"
      {...props}
    >
      <path
        d="M13.5 7.25c.828 0 1.5.672 1.5 1.5V10c0 2.761-2.239 5-5 5H6c-2.761 0-5-2.239-5-5V8.75c0-.828.672-1.5 1.5-1.5S4 7.922 4 8.75V10c0 1.105.896 2 2 2h4c1.104 0 2-.895 2-2V8.75c0-.828.672-1.5 1.5-1.5zM6.843 1.411c.672-.547 1.641-.547 2.313 0l.14.126 2.402 2.403c.586.585.586 1.535 0 2.12-.585.586-1.535.586-2.12 0l-.079-.077V9c0 .829-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V5.984l-.077.077c-.586.585-1.536.585-2.121 0-.586-.586-.586-1.535 0-2.121l2.402-2.403.14-.126z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpFromBracketBoldFilled16.category = 'Arrows';

export default ArrowUpFromBracketBoldFilled16;

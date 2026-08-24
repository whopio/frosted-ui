import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracketBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFromBracketBoldFilled20"
      {...props}
    >
      <path
        d="M17.5 9.25c.828 0 1.5.672 1.5 1.5V13c0 3.314-2.686 6-6 6H7c-3.314 0-6-2.686-6-6v-2.25c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5V13c0 1.657 1.343 3 3 3h6c1.657 0 3-1.343 3-3v-2.25c0-.828.672-1.5 1.5-1.5zM8.645 1.562C9.346.86 10.457.816 11.21 1.43l.145.132 3.705 3.705c.586.586.586 1.536 0 2.122-.585.585-1.535.585-2.12 0l-1.44-1.44V11.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5V5.95L7.06 7.388c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.122l3.705-3.705z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracketBoldFilled20.category = 'Arrows';

export default ArrowUpFromBracketBoldFilled20;

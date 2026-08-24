import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatDownBold24"
      {...props}
    >
      <path
        d="M7 11.618V3.434C7 2.642 7.642 2 8.434 2h7.132C16.358 2 17 2.642 17 3.434v8.184c0 .21.171.382.382.382h3.28c.504 0 .763.604.415.97l-8.246 8.658c-.452.474-1.21.474-1.662 0l-8.246-8.659c-.348-.365-.089-.969.416-.969h3.279c.21 0 .382-.171.382-.382z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDownBold24.category = 'Arrows';

export default ArrowFatDownBold24;

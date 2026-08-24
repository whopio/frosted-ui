import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowUpDownFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowUpDownFilled16"
      {...props}
    >
      <path
        d="M8.366 11.883c-.488-.489-.489-1.28 0-1.768.488-.488 1.279-.488 1.767 0l.616.616V2.25c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v8.482l.617-.616c.488-.488 1.279-.488 1.767 0s.488 1.28 0 1.768l-2.75 2.75c-.488.488-1.28.488-1.767 0l-2.75-2.75zM.367 5.886c-.488-.488-.488-1.279 0-1.767l2.754-2.754c.235-.234.553-.366.884-.366.332 0 .65.132.884.366l2.754 2.754c.488.488.488 1.28 0 1.767-.488.489-1.28.489-1.768 0l-.62-.62v8.483c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V5.266l-.62.62c-.488.489-1.28.489-1.768 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowUpDownFilled16.category = 'Arrows';

export default DoubleArrowUpDownFilled16;

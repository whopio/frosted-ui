import * as React from 'react';
import { IconProps } from './types';

export const PercentageFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PercentageFilled24"
      {...props}
    >
      <path
        d="M20.866 1.366c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768l-19.5 19.5c-.488.488-1.28.488-1.768 0-.488-.489-.488-1.28 0-1.768l19.5-19.5zM18.5 14c2.485 0 4.5 2.015 4.5 4.5S20.985 23 18.5 23 14 20.985 14 18.5s2.015-4.5 4.5-4.5zm0 2.5c-1.105 0-2 .895-2 2 0 1.104.895 2 2 2s2-.896 2-2c0-1.105-.895-2-2-2zM5.5 1C7.985 1 10 3.015 10 5.5S7.985 10 5.5 10 1 7.985 1 5.5 3.015 1 5.5 1zm0 2.5c-1.105 0-2 .895-2 2 0 1.104.895 2 2 2 1.104 0 2-.896 2-2 0-1.105-.896-2-2-2z"
        fill={color}
      />
    </svg>
  );
};

PercentageFilled24.category = 'Money & Shopping';

export default PercentageFilled24;

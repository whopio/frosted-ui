import * as React from 'react';
import { IconProps } from './types';

export const PercentageBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PercentageBoldFilled16"
      {...props}
    >
      <path
        d="M12.44 1.44c.585-.586 1.535-.586 2.12 0 .586.586.586 1.535 0 2.12l-11 11c-.585.586-1.535.587-2.12 0-.586-.585-.586-1.534 0-2.12l11-11zM12 9c1.657 0 3 1.344 3 3 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.656 1.343-3 3-3zM4 1c1.657 0 3 1.344 3 3 0 1.657-1.343 3-3 3S1 5.657 1 4c0-1.656 1.343-3 3-3z"
        fill={color}
      />
    </svg>
  );
};

PercentageBoldFilled16.category = 'Money & Shopping';

export default PercentageBoldFilled16;

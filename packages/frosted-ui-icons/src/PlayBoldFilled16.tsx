import * as React from 'react';
import { IconProps } from './types';

export const PlayBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2 3.66407C2 1.61282 4.26422 0.369072 5.99512 1.46974L12.8135 5.80567C14.4198 6.82724 14.4198 9.17277 12.8135 10.1943L5.99512 14.5303C4.26422 15.6309 2 14.3872 2 12.3359V3.66407Z"
        fill={color}
      />
    </svg>
  );
};

PlayBoldFilled16.category = 'Sound & Music';

export default PlayBoldFilled16;

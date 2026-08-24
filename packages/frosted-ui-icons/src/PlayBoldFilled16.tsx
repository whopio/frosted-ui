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
      data-fui-icon="PlayBoldFilled16"
      {...props}
    >
      <path
        d="M2 3.664C2 1.613 4.264.37 5.995 1.47l6.818 4.336c1.607 1.021 1.607 3.367 0 4.388L5.995 14.53C4.265 15.63 2 14.387 2 12.336V3.664z"
        fill={color}
      />
    </svg>
  );
};

PlayBoldFilled16.category = 'Sound & Music';

export default PlayBoldFilled16;

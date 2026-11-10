import * as React from 'react';
import { IconProps } from './types';

export const MoonBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MoonBold16"
      {...props}
    >
      <path
        d="M7.277 3.722c0-.737.16-1.436.447-2.066.032-.069-.02-.147-.095-.143C4.212 1.705 1.5 4.535 1.5 8c0 3.59 2.91 6.5 6.5 6.5 3.465 0 6.295-2.712 6.487-6.13.004-.075-.075-.126-.144-.095-.63.287-1.329.447-2.066.447-2.761 0-5-2.238-5-5z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

MoonBold16.category = 'Nature & Weather';

export default MoonBold16;

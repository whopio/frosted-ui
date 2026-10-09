import * as React from 'react';
import { IconProps } from './types';

export const MessageBlank12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBlank12"
      {...props}
    >
      <path
        d="M10.5 6c0-2.485-2.015-4.5-4.5-4.5S1.5 3.515 1.5 6c0 .697.159 1.355.44 1.942.073.152.094.324.058.489-.15.701-.331 1.425-.487 2.017l-.002.007v.003c.002.004.005.011.013.02.008.008.016.011.02.012l.003.001.007-.002c.592-.156 1.316-.336 2.017-.487l.125-.017c.125-.005.25.02.364.075.587.281 1.245.44 1.942.44 2.485 0 4.5-2.015 4.5-4.5zM12 6c0 3.314-2.686 6-6 6-.832 0-1.625-.171-2.347-.479-.598.134-1.205.284-1.718.42-1.13.297-2.173-.746-1.875-1.876.135-.514.285-1.122.419-1.721C.172 7.624 0 6.83 0 6c0-3.314 2.687-6 6-6 3.314 0 6 2.686 6 6z"
        fill={color}
      />
    </svg>
  );
};

MessageBlank12.category = 'Communication';

export default MessageBlank12;

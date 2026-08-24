import * as React from 'react';
import { IconProps } from './types';

export const Waveform16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Waveform16"
      {...props}
    >
      <path
        d="M4.25 1c.414 0 .75.336.75.75v12.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V1.75c0-.414.336-.75.75-.75zm7 2c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zM.75 4c.414 0 .75.336.75.75v6.5c0 .414-.336.75-.75.75S0 11.664 0 11.25v-6.5C0 4.336.336 4 .75 4zm7 1c.414 0 .75.336.75.75v4.5c0 .414-.336.75-.75.75S7 10.664 7 10.25v-4.5c0-.414.336-.75.75-.75zm7 1c.414 0 .75.336.75.75v2.5c0 .414-.336.75-.75.75S14 9.664 14 9.25v-2.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Waveform16.category = 'Sound & Music';

export default Waveform16;

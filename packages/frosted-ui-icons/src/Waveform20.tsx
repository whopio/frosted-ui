import * as React from 'react';
import { IconProps } from './types';

export const Waveform20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Waveform20"
      {...props}
    >
      <path
        d="M4.75 1c.414 0 .75.336.75.75v16.5c0 .414-.336.75-.75.75S4 18.664 4 18.25V1.75c0-.414.336-.75.75-.75zm7 2c.414 0 .75.336.75.75v12.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.75c0-.414.336-.75.75-.75zM1.25 5c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm14 1c.414 0 .75.336.75.75v6.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6.5c0-.414.336-.75.75-.75zm-7 1c.414 0 .75.336.75.75v4.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-4.5c0-.414.336-.75.75-.75zm10.5 1c.414 0 .75.336.75.75v2.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Waveform20.category = 'Sound & Music';

export default Waveform20;

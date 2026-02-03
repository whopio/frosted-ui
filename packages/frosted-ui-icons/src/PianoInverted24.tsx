import * as React from 'react';
import { IconProps } from './types';

export const PianoInverted24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.5004 11.5005C13.5007 12.7097 14.3595 13.7179 15.5003 13.9496V24H8.50063V13.9496C9.64135 13.7177 10.5003 12.7095 10.5005 11.5005V0H13.5004V11.5005ZM5.00077 11.5005C5.001 12.7097 5.85984 13.7179 7.00069 13.9496V23.9629C3.07277 23.5856 0.00122489 20.2771 0.000976523 16.2503V7.75066C0.000976523 4.43922 2.07849 1.61379 5.00077 0.503886V11.5005ZM19.0002 0.503886C21.9224 1.61389 24 4.43936 24 7.75066V16.2503C23.9998 20.2769 20.928 23.5854 17.0003 23.9629V13.9496C18.141 13.7177 19 12.7095 19.0002 11.5005V0.503886Z"
        fill={color}
      />
    </svg>
  );
};

export default PianoInverted24;

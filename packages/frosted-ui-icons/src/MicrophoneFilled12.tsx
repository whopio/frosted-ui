import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneFilled12"
      {...props}
    >
      <path
        d="M10.75 4.1c.414 0 .75.335.75.75 0 2.672-1.997 4.876-4.58 5.205-.096.013-.17.093-.17.19v.068c0 .103.084.187.188.187H8.25c.414 0 .75.336.75.75s-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.313c.103 0 .187-.084.187-.188v-.067c0-.097-.074-.177-.17-.19C2.497 9.726.5 7.522.5 4.85c0-.415.336-.75.75-.75s.75.335.75.75C2 6.92 3.679 8.6 5.75 8.6h.5C8.321 8.6 10 6.92 10 4.85c0-.415.336-.75.75-.75zM6 0c1.657 0 3 1.343 3 3v1.5c0 1.657-1.343 3-3 3s-3-1.343-3-3V3c0-1.657 1.343-3 3-3z"
        fill={color}
      />
    </svg>
  );
};

MicrophoneFilled12.category = 'Sound & Music';

export default MicrophoneFilled12;

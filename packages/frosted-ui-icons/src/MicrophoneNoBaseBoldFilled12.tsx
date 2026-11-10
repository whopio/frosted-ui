import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneNoBaseBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneNoBaseBoldFilled12"
      {...props}
    >
      <path
        d="M10.75 3.6c.552 0 1 .448 1 1 0 2.758-1.978 5.054-4.592 5.55-.09.016-.158.095-.158.187V11c0 .552-.448 1-1 1s-1-.448-1-1v-.663c0-.092-.067-.17-.158-.188C2.228 9.654.25 7.36.25 4.6c0-.551.448-1 1-1s1 .449 1 1c0 2.016 1.635 3.651 3.65 3.651h.2c2.015 0 3.65-1.635 3.65-3.65 0-.552.448-1 1-1zM6 0c1.657 0 3 1.343 3 3v1.5c0 1.657-1.343 3-3 3s-3-1.343-3-3V3c0-1.657 1.343-3 3-3z"
        fill={color}
      />
    </svg>
  );
};

MicrophoneNoBaseBoldFilled12.category = 'Sound & Music';

export default MicrophoneNoBaseBoldFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const SpeakerFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SpeakerFilled16"
      {...props}
    >
      <path
        d="M10 1c2.21 0 4 1.79 4 4v6c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V5c0-2.21 1.79-4 4-4h4zM8 6.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

SpeakerFilled16.category = 'Sound & Music';

export default SpeakerFilled16;

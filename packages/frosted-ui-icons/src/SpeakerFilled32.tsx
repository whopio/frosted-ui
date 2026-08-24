import * as React from 'react';
import { IconProps } from './types';

export const SpeakerFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SpeakerFilled32"
      {...props}
    >
      <path
        d="M21.25 1c4.004 0 7.25 3.246 7.25 7.25v15.5c0 4.004-3.246 7.25-7.25 7.25h-10.5c-4.004 0-7.25-3.246-7.25-7.25V8.25C3.5 4.246 6.746 1 10.75 1h10.5zM16 12.5c-3.728 0-6.75 3.022-6.75 6.75S12.272 26 16 26s6.75-3.022 6.75-6.75S19.728 12.5 16 12.5zM16 7c-.828 0-1.5.672-1.5 1.5S15.172 10 16 10s1.5-.672 1.5-1.5S16.828 7 16 7z"
        fill={color}
      />
    </svg>
  );
};

SpeakerFilled32.category = 'Sound & Music';

export default SpeakerFilled32;

import * as React from 'react';
import { IconProps } from './types';

export const SpeakerBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SpeakerBoldFilled32"
      {...props}
    >
      <path
        d="M21 1c4.142 0 7.5 3.358 7.5 7.5v15c0 4.142-3.358 7.5-7.5 7.5H11c-4.142 0-7.5-3.358-7.5-7.5v-15C3.5 4.358 6.858 1 11 1h10zm-5 11c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0-5c-.828 0-1.5.672-1.5 1.5S15.172 10 16 10s1.5-.672 1.5-1.5S16.828 7 16 7z"
        fill={color}
      />
    </svg>
  );
};

SpeakerBoldFilled32.category = 'Sound & Music';

export default SpeakerBoldFilled32;

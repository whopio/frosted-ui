import * as React from 'react';
import { IconProps } from './types';

export const SpeakerBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SpeakerBold32"
      {...props}
    >
      <path
        d="M21 1c4.142 0 7.5 3.358 7.5 7.5v15c0 4.142-3.358 7.5-7.5 7.5H11c-4.142 0-7.5-3.358-7.5-7.5v-15C3.5 4.358 6.858 1 11 1h10zM11 3C7.962 3 5.5 5.462 5.5 8.5v15c0 3.038 2.462 5.5 5.5 5.5h10c3.038 0 5.5-2.462 5.5-5.5v-15C26.5 5.462 24.038 3 21 3H11zm5 9c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7zm0 2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0-7c.828 0 1.5.672 1.5 1.5S16.828 10 16 10s-1.5-.672-1.5-1.5S15.172 7 16 7z"
        fill={color}
      />
    </svg>
  );
};

SpeakerBold32.category = 'Sound & Music';

export default SpeakerBold32;

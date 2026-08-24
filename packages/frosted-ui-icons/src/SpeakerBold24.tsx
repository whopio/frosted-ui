import * as React from 'react';
import { IconProps } from './types';

export const SpeakerBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SpeakerBold24"
      {...props}
    >
      <path
        d="M15.125 1C18.37 1 21 3.63 21 6.875v10.25C21 20.37 18.37 23 15.125 23h-6.25C5.63 23 3 20.37 3 17.125V6.875C3 3.63 5.63 1 8.875 1h6.25zm-6.25 2C6.735 3 5 4.735 5 6.875v10.25C5 19.265 6.735 21 8.875 21h6.25C17.265 21 19 19.265 19 17.125V6.875C19 4.735 17.265 3 15.125 3h-6.25zM12 9.5c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm0 2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM12 5c.828 0 1.5.672 1.5 1.5S12.828 8 12 8s-1.5-.672-1.5-1.5S11.172 5 12 5z"
        fill={color}
      />
    </svg>
  );
};

SpeakerBold24.category = 'Sound & Music';

export default SpeakerBold24;

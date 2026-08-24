import * as React from 'react';
import { IconProps } from './types';

export const SpeakerBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SpeakerBoldFilled24"
      {...props}
    >
      <path
        d="M15.125 1C18.37 1 21 3.63 21 6.875v10.25C21 20.37 18.37 23 15.125 23h-6.25C5.63 23 3 20.37 3 17.125V6.875C3 3.63 5.63 1 8.875 1h6.25zM12 9.5c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zM12 5c-.828 0-1.5.672-1.5 1.5S11.172 8 12 8s1.5-.672 1.5-1.5S12.828 5 12 5z"
        fill={color}
      />
    </svg>
  );
};

SpeakerBoldFilled24.category = 'Sound & Music';

export default SpeakerBoldFilled24;

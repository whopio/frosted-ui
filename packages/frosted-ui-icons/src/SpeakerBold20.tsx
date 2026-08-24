import * as React from 'react';
import { IconProps } from './types';

export const SpeakerBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SpeakerBold20"
      {...props}
    >
      <path
        d="M12.438 1C15.232 1 17.5 3.267 17.5 6.063v7.875c0 2.795-2.267 5.062-5.063 5.062H7.564C4.767 19 2.5 16.733 2.5 13.937V6.064C2.5 3.267 4.767 1 7.563 1h4.875zM7.561 3C5.873 3 4.5 4.371 4.5 6.063v7.875C4.5 15.627 5.871 17 7.563 17h4.875c1.69 0 3.062-1.371 3.062-3.063V6.064C15.5 4.37 14.129 3 12.437 3H7.564zM10 8.25c2.071 0 3.75 1.679 3.75 3.75 0 2.071-1.679 3.75-3.75 3.75-2.071 0-3.75-1.679-3.75-3.75 0-2.071 1.679-3.75 3.75-3.75zm0 2c-.966 0-1.75.784-1.75 1.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75-.784-1.75-1.75-1.75zm0-5.75c.69 0 1.25.56 1.25 1.25S10.69 7 10 7s-1.25-.56-1.25-1.25S9.31 4.5 10 4.5z"
        fill={color}
      />
    </svg>
  );
};

SpeakerBold20.category = 'Sound & Music';

export default SpeakerBold20;

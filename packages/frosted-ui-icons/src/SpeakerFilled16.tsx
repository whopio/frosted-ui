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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.5 0C12.7091 0 14.5 1.79086 14.5 4V12C14.5 14.2091 12.7091 16 10.5 16H5.5C3.29086 16 1.5 14.2091 1.5 12V4C1.5 1.79086 3.29086 0 5.5 0H10.5ZM8 6.5C6.34315 6.5 5 7.84315 5 9.5C5 11.1569 6.34315 12.5 8 12.5C9.65685 12.5 11 11.1569 11 9.5C11 7.84315 9.65685 6.5 8 6.5ZM8 3.5C7.44772 3.5 7 3.94772 7 4.5C7 5.05228 7.44772 5.5 8 5.5C8.55228 5.5 9 5.05228 9 4.5C9 3.94772 8.55228 3.5 8 3.5Z"
        fill={color}
      />
    </svg>
  );
};

SpeakerFilled16.category = 'Sound & Music';

export default SpeakerFilled16;

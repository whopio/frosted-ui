import * as React from 'react';
import { IconProps } from './types';

export const SpeakerBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SpeakerBold16"
      {...props}
    >
      <path
        d="M9.75 1C12.097 1 14 2.903 14 5.25v5.5C14 13.097 12.097 15 9.75 15h-3.5C3.903 15 2 13.097 2 10.75v-5.5C2 2.903 3.903 1 6.25 1h3.5zm-3.5 2C5.007 3 4 4.007 4 5.25v5.5C4 11.993 5.007 13 6.25 13h3.5c1.243 0 2.25-1.007 2.25-2.25v-5.5C12 4.007 10.993 3 9.75 3h-3.5zM8 6.5c1.519 0 2.75 1.231 2.75 2.75S9.519 12 8 12s-2.75-1.231-2.75-2.75S6.481 6.5 8 6.5zm0 2c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75S8.414 8.5 8 8.5zM8 4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

SpeakerBold16.category = 'Sound & Music';

export default SpeakerBold16;

import * as React from 'react';
import { IconProps } from './types';

export const SpeakerBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SpeakerBoldFilled12"
      {...props}
    >
      <path
        d="M7.563 0C9.46 0 11 1.539 11 3.438v5.124C11 10.462 9.461 12 7.562 12H4.438C2.54 12 1 10.461 1 8.562V3.439C1 1.538 2.539 0 4.438 0h3.125zM5.994 5.25c-1.035 0-1.875.84-1.875 1.875C4.12 8.161 4.96 9 5.994 9 7.03 9 7.87 8.16 7.87 7.125c0-1.036-.84-1.875-1.875-1.875zM6 2.75c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

SpeakerBoldFilled12.category = 'Sound & Music';

export default SpeakerBoldFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const SpeakerBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SpeakerBold12"
      {...props}
    >
      <path
        d="M7.563 0C9.46 0 11 1.539 11 3.438v5.124C11 10.462 9.461 12 7.562 12H4.438C2.54 12 1 10.461 1 8.562V3.439C1 1.538 2.539 0 4.438 0h3.125zM4.438 2C3.643 2 3 2.644 3 3.438v5.124C3 9.357 3.644 10 4.438 10h3.125C8.355 10 9 9.356 9 8.562V3.439C9 2.643 8.356 2 7.562 2H4.438zm1.556 3.25c1.036 0 1.875.84 1.875 1.875C7.87 8.161 7.03 9 5.994 9 4.96 9 4.12 8.16 4.12 7.125c0-1.036.84-1.875 1.875-1.875zm0 1.75c-.069 0-.125.056-.125.125s.056.125.125.125c.07 0 .125-.056.125-.125S6.063 7 5.994 7zM6 2.75c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

SpeakerBold12.category = 'Sound & Music';

export default SpeakerBold12;

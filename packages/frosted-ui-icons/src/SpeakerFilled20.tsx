import * as React from 'react';
import { IconProps } from './types';

export const SpeakerFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.125 0C15.7829 0 17.9375 2.15463 17.9375 4.8125V15.1875C17.9375 17.8454 15.7829 20 13.125 20H6.875C4.21713 20 2.0625 17.8454 2.0625 15.1875V4.8125C2.0625 2.15463 4.21713 0 6.875 0H13.125ZM10 8.25C7.92893 8.25 6.25 9.92893 6.25 12C6.25 14.0711 7.92893 15.75 10 15.75C12.0711 15.75 13.75 14.0711 13.75 12C13.75 9.92893 12.0711 8.25 10 8.25ZM10 4.25C9.30964 4.25 8.75 4.80964 8.75 5.5C8.75 6.19036 9.30964 6.75 10 6.75C10.6904 6.75 11.25 6.19036 11.25 5.5C11.25 4.80964 10.6904 4.25 10 4.25Z"
        fill={color}
      />
    </svg>
  );
};

export default SpeakerFilled20;

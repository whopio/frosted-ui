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
        d="M12.6875 1C15.3454 1 17.5 3.15463 17.5 5.8125V14.1875C17.5 16.8454 15.3454 19 12.6875 19H7.3125C4.65463 19 2.5 16.8454 2.5 14.1875V5.8125C2.5 3.15463 4.65463 1 7.3125 1H12.6875ZM10 8.25C7.92893 8.25 6.25 9.92893 6.25 12C6.25 14.0711 7.92893 15.75 10 15.75C12.0711 15.75 13.75 14.0711 13.75 12C13.75 9.92893 12.0711 8.25 10 8.25ZM10 4.25C9.30964 4.25 8.75 4.80964 8.75 5.5C8.75 6.19036 9.30964 6.75 10 6.75C10.6904 6.75 11.25 6.19036 11.25 5.5C11.25 4.80964 10.6904 4.25 10 4.25Z"
        fill={color}
      />
    </svg>
  );
};

SpeakerFilled20.category = 'Sound & Music';

export default SpeakerFilled20;

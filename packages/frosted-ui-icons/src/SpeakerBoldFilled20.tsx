import * as React from 'react';
import { IconProps } from './types';

export const SpeakerBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.4375 1C15.2334 1 17.5 3.26656 17.5 6.0625V13.9375C17.5 16.7334 15.2334 19 12.4375 19H7.5625C4.76656 19 2.5 16.7334 2.5 13.9375V6.0625C2.5 3.26656 4.76656 1 7.5625 1H12.4375ZM10 8.25C7.92893 8.25 6.25 9.92893 6.25 12C6.25 14.0711 7.92893 15.75 10 15.75C12.0711 15.75 13.75 14.0711 13.75 12C13.75 9.92893 12.0711 8.25 10 8.25ZM10 4.5C9.30964 4.5 8.75 5.05964 8.75 5.75C8.75 6.44036 9.30964 7 10 7C10.6904 7 11.25 6.44036 11.25 5.75C11.25 5.05964 10.6904 4.5 10 4.5Z"
        fill={color}
      />
    </svg>
  );
};

SpeakerBoldFilled20.category = 'Sound & Music';

export default SpeakerBoldFilled20;

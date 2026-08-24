import * as React from 'react';
import { IconProps } from './types';

export const JourneyBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="JourneyBoldFilled16"
      {...props}
    >
      <path
        d="M12.25 1C13.769 1 15 2.231 15 3.75S13.769 6.5 12.25 6.5c-1.166 0-2.16-.726-2.56-1.75H4.126C3.504 4.75 3 5.254 3 5.876c0 .621.505 1.125 1.126 1.125h7.75c1.725 0 3.124 1.4 3.124 3.125s-1.399 3.124-3.124 3.124H6.31C5.91 14.274 4.916 15 3.75 15 2.231 15 1 13.769 1 12.25S2.231 9.5 3.75 9.5c1.166 0 2.16.726 2.56 1.75h5.566c.62 0 1.124-.504 1.124-1.124 0-.62-.503-1.125-1.124-1.125h-7.75C2.4 9.001 1 7.602 1 5.876S2.4 2.75 4.126 2.75H9.69C10.09 1.726 11.084 1 12.25 1z"
        fill={color}
      />
    </svg>
  );
};

JourneyBoldFilled16.category = 'Interface General';

export default JourneyBoldFilled16;

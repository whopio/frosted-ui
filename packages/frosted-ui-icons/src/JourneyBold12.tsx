import * as React from 'react';
import { IconProps } from './types';

export const JourneyBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="JourneyBold12"
      {...props}
    >
      <path
        d="M9.75 0C10.993 0 12 1.007 12 2.25S10.993 4.5 9.75 4.5c-.883 0-1.645-.51-2.014-1.25H2.875c-.483 0-.875.392-.875.875S2.392 5 2.875 5h6.25C10.713 5 12 6.287 12 7.875s-1.287 2.875-2.875 2.875H4.264C3.895 11.49 3.133 12 2.25 12 1.007 12 0 10.993 0 9.75S1.007 7.5 2.25 7.5c.883 0 1.645.51 2.014 1.25h4.861c.483 0 .875-.392.875-.875S9.608 7 9.125 7h-6.25C1.287 7 0 5.713 0 4.125S1.287 1.25 2.875 1.25h4.861C8.105.51 8.867 0 9.75 0zm-7.5 9.5c-.138 0-.25.112-.25.25s.112.25.25.25.25-.112.25-.25-.112-.25-.25-.25zM9.75 2c-.138 0-.25.112-.25.25s.112.25.25.25.25-.112.25-.25S9.888 2 9.75 2z"
        fill={color}
      />
    </svg>
  );
};

JourneyBold12.category = 'Interface General';

export default JourneyBold12;

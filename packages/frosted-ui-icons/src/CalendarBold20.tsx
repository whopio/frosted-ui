import * as React from 'react';
import { IconProps } from './types';

export const CalendarBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.25 0.75C13.8023 0.75 14.25 1.19772 14.25 1.75V2.75H15.6797C17.6513 2.75 19.25 4.34866 19.25 6.32031V15.6797C19.25 17.6513 17.6513 19.25 15.6797 19.25H4.32031C2.34866 19.25 0.75 17.6513 0.75 15.6797V6.32031C0.75 4.34866 2.34866 2.75 4.32031 2.75H5.75V1.75C5.75 1.19772 6.19772 0.75 6.75 0.75C7.30228 0.75 7.75 1.19772 7.75 1.75V2.75H12.25V1.75C12.25 1.19772 12.6977 0.75 13.25 0.75ZM2.75 15.6797C2.75 16.5468 3.45323 17.25 4.32031 17.25H15.6797C16.5468 17.25 17.25 16.5468 17.25 15.6797V8.75H2.75V15.6797ZM4.32031 4.75C3.45323 4.75 2.75 5.45323 2.75 6.32031V6.75H17.25V6.32031C17.25 5.45323 16.5468 4.75 15.6797 4.75H4.32031Z"
        fill={color}
      />
    </svg>
  );
};

CalendarBold20.category = 'Interface General';

export default CalendarBold20;

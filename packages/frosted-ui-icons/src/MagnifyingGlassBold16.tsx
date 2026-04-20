import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.00293 1C10.3166 1 13.0029 3.68629 13.0029 7C13.0029 8.29655 12.5898 9.49544 11.8906 10.4766L14.707 13.293C15.0976 13.6835 15.0976 14.3165 14.707 14.707C14.3165 15.0976 13.6835 15.0976 13.293 14.707L10.4766 11.8906C9.49613 12.5882 8.29783 13 7.00293 13C3.68939 12.9998 1.00293 10.3136 1.00293 7C1.00293 3.68641 3.68939 1.0002 7.00293 1ZM7.00293 3C4.79396 3.0002 3.00293 4.79098 3.00293 7C3.00293 9.20902 4.79396 10.9998 7.00293 11C9.21207 11 11.0029 9.20914 11.0029 7C11.0029 4.79086 9.21207 3 7.00293 3Z"
        fill={color}
      />
    </svg>
  );
};

MagnifyingGlassBold16.category = 'Interface General';

export default MagnifyingGlassBold16;

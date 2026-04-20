import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM11.793 5.66309C12.2132 4.73798 11.262 3.78683 10.3369 4.20703L6.97559 5.73438C6.42548 5.98447 5.9845 6.4255 5.73438 6.97559L4.20703 10.3369C3.78678 11.262 4.73795 12.2132 5.66309 11.793L9.02441 10.2656C9.57452 10.0155 10.0155 9.57454 10.2656 9.02441L11.793 5.66309Z"
        fill={color}
      />
    </svg>
  );
};

CompassFilled16.category = 'Interface General';

export default CompassFilled16;

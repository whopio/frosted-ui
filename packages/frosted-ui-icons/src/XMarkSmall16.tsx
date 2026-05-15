import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.4687 4.46983C10.7615 4.177 11.2363 4.17711 11.5292 4.46983C11.8219 4.76274 11.8221 5.23755 11.5292 5.53038L9.06049 8.00011L11.5292 10.4689C11.8221 10.7617 11.8219 11.2375 11.5292 11.5304C11.2364 11.8229 10.7615 11.823 10.4687 11.5304L7.99994 9.06065L5.52924 11.5304C5.23641 11.8232 4.7616 11.8231 4.46869 11.5304C4.17597 11.2375 4.17586 10.7627 4.46869 10.4698L6.93842 8.00011L4.46869 5.53038C4.1758 5.23749 4.1758 4.76175 4.46869 4.46886C4.76152 4.17642 5.23644 4.17637 5.52924 4.46886L7.99994 6.93956L10.4687 4.46983Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmall16.category = 'Interface General';

export default XMarkSmall16;

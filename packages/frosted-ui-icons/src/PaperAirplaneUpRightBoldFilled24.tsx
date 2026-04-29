import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.8569 1.64405C20.6167 0.767093 23.2176 3.3678 22.3404 6.12751L17.4543 21.4954C16.419 24.7519 11.8391 24.8293 10.695 21.6093L8.88447 16.512L14.2269 11.1696C14.6172 10.7791 14.6173 10.1459 14.2269 9.75543C13.8365 9.36515 13.2032 9.36521 12.8128 9.75543L7.46824 15.0999L2.37092 13.2881C-0.847998 12.143 -0.770401 7.56306 2.48555 6.528L17.8569 1.64405Z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpRightBoldFilled24.category = 'Communication';

export default PaperAirplaneUpRightBoldFilled24;

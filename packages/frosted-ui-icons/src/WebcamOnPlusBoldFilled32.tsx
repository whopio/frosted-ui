import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnPlusBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.5225 4.5C20.1816 4.50015 23.2245 7.12887 23.8711 10.6006L27.1641 7.97949C28.7127 6.7467 31 7.84971 31 9.8291V22.2568C31 24.2095 28.7669 25.3201 27.21 24.1416L23.834 21.5869C23.1145 24.9653 20.1154 27.4999 16.5225 27.5H8.47754C4.34788 27.4998 1.00017 24.1521 1 20.0225V11.9775C1.00017 7.84788 4.34788 4.50017 8.47754 4.5H16.5225ZM12.25 9.125C11.4906 9.125 10.875 9.74061 10.875 10.5V14.625H6.75C5.99061 14.625 5.375 15.2406 5.375 16C5.375 16.7594 5.99061 17.375 6.75 17.375H10.875V21.5C10.875 22.2594 11.4906 22.875 12.25 22.875C13.0094 22.875 13.625 22.2594 13.625 21.5V17.375H17.75C18.5094 17.375 19.125 16.7594 19.125 16C19.125 15.2406 18.5094 14.625 17.75 14.625H13.625V10.5C13.625 9.74061 13.0094 9.125 12.25 9.125Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnPlusBoldFilled32.category = 'Interface General';

export default WebcamOnPlusBoldFilled32;

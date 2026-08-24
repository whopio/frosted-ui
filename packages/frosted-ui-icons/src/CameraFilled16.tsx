import * as React from 'react';
import { IconProps } from './types';

export const CameraFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CameraFilled16"
      {...props}
    >
      <path
        d="M9.594.75c1.14 0 2.19.617 2.748 1.611l.243.434c.157.28.454.455.775.455 1.32 0 2.39 1.07 2.39 2.39v6.46c0 1.74-1.41 3.15-3.15 3.15H3.4c-1.74 0-3.15-1.41-3.15-3.15V5.64c0-1.32 1.07-2.39 2.39-2.39.321 0 .618-.174.775-.455l.243-.434C4.215 1.367 5.266.751 6.406.75h3.188zM8 5C6.067 5 4.5 6.567 4.5 8.5S6.067 12 8 12s3.5-1.567 3.5-3.5S9.933 5 8 5zm0 1.5c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"
        fill={color}
      />
    </svg>
  );
};

CameraFilled16.category = 'Interface General';

export default CameraFilled16;

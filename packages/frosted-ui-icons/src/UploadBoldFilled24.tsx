import * as React from 'react';
import { IconProps } from './types';

export const UploadBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.75 20.2503C22.5784 20.2503 23.25 20.9219 23.25 21.7503C23.2498 22.5786 22.5783 23.2503 21.75 23.2503H2.25C1.42169 23.2503 0.750194 22.5786 0.75 21.7503C0.75 20.9219 1.42157 20.2503 2.25 20.2503H21.75ZM11.0537 1.08627C11.6429 0.606158 12.5115 0.640765 13.0605 1.18979L19.8105 7.93979C20.3962 8.52559 20.3963 9.47516 19.8105 10.0609C19.2248 10.6464 18.2752 10.6464 17.6895 10.0609L13.5 5.87143V17.0003C13.4998 17.8286 12.8283 18.5003 12 18.5003C11.1717 18.5003 10.5002 17.8286 10.5 17.0003V5.87143L6.31055 10.0609C5.72481 10.6464 4.77519 10.6464 4.18945 10.0609C3.60373 9.47516 3.60385 8.52559 4.18945 7.93979L10.9395 1.18979L11.0537 1.08627Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UploadBoldFilled24.category = 'Arrows';

export default UploadBoldFilled24;

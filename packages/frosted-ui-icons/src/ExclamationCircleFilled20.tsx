import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.99902 0C15.521 0.00014225 19.9969 4.47706 19.9971 9.99902C19.9969 15.521 15.521 19.9969 9.99902 19.9971C4.47704 19.997 0.000142247 15.521 0 9.99902C0.000131944 4.47704 4.47704 0.00011307 9.99902 0ZM9.99902 13C9.44674 13 8.99902 13.4477 8.99902 14V14.0166C8.99902 14.5689 9.44674 15.0166 9.99902 15.0166C10.5513 15.0166 10.999 14.5689 10.999 14.0166V14C10.999 13.4477 10.5513 13 9.99902 13ZM9.99902 4.5C9.58481 4.5 9.24902 4.83579 9.24902 5.25V10.25C9.24902 10.6642 9.58481 11 9.99902 11C10.4132 11 10.749 10.6642 10.749 10.25V5.25C10.749 4.83579 10.4132 4.5 9.99902 4.5Z"
        fill={color}
      />
    </svg>
  );
};

export default ExclamationCircleFilled20;

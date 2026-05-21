import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.64846 3.14698C10.1223 0.540194 13.8777 0.540208 15.3516 3.14698L23.4668 17.5054C24.9173 20.0719 23.0633 23.2495 20.1153 23.2495H3.88478C0.936736 23.2495 -0.917298 20.0719 0.533222 17.5054L8.64846 3.14698ZM12 16.9995C11.4479 16.9995 11.0003 17.4475 11 17.9995C11 18.5518 11.4477 18.9995 12 18.9995C12.5523 18.9995 13 18.5518 13 17.9995C12.9998 17.4474 12.5521 16.9995 12 16.9995ZM12 7.74952C11.4479 7.74953 11.0003 8.19745 11 8.74952V14.2495C11 14.8018 11.4477 15.2495 12 15.2495C12.5523 15.2495 13 14.8018 13 14.2495V8.74952C12.9998 8.19745 12.5521 7.74952 12 7.74952Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangleBoldFilled24.category = 'Interface General';

export default ExclamationTriangleBoldFilled24;

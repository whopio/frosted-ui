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
        d="M8.64844 3.14703C10.1223 0.540245 13.8777 0.540247 15.3516 3.14703L23.4668 17.5054C24.9173 20.0719 23.0633 23.2496 20.1152 23.2496H3.88477C0.936705 23.2496 -0.91732 20.0719 0.533203 17.5054L8.64844 3.14703ZM12 16.9996C11.4479 16.9996 11.0002 17.4475 11 17.9996C11 18.5519 11.4477 18.9996 12 18.9996C12.5523 18.9996 13 18.5519 13 17.9996C12.9998 17.4475 12.5521 16.9996 12 16.9996ZM12 7.74957C11.4479 7.74957 11.0002 8.1975 11 8.74957V14.2496C11 14.8019 11.4477 15.2496 12 15.2496C12.5523 15.2496 13 14.8019 13 14.2496V8.74957C12.9998 8.1975 12.5521 7.74957 12 7.74957Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationTriangleBoldFilled24.category = 'Interface General';

export default ExclamationTriangleBoldFilled24;

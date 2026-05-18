import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevron24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18.97 15.2196C19.2629 14.927 19.7377 14.9268 20.0305 15.2196C20.3231 15.5124 20.323 15.9873 20.0305 16.2801L12.5306 23.78C12.2377 24.0729 11.7629 24.0727 11.47 23.78L3.97012 16.2801C3.67723 15.9872 3.67723 15.5125 3.97012 15.2196C4.26303 14.927 4.73786 14.9268 5.03065 15.2196L12.0003 22.1892L18.97 15.2196ZM12.0003 0C12.199 0.000144505 12.3901 0.0792008 12.5306 0.219724L20.0305 7.71965C20.3231 8.01244 20.323 8.48732 20.0305 8.78018C19.7377 9.07302 19.2629 9.07293 18.97 8.78018L12.0003 1.81053L5.03065 8.78018C4.73784 9.07299 4.26303 9.07284 3.97012 8.78018C3.67723 8.48729 3.67723 8.01254 3.97012 7.71965L11.47 0.219724C11.6107 0.0792848 11.8016 0 12.0003 0Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevron24.category = 'Arrows';

export default DoubleChevron24;

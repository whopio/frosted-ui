import * as React from 'react';
import { IconProps } from './types';

export const UploadFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.75 16.5C18.4403 16.5 19 17.0596 19 17.75C19 18.4403 18.4404 19 17.75 19H2.25C1.55964 19 1 18.4403 1 17.75C1.00003 17.0596 1.55966 16.5 2.25 16.5H17.75ZM9.21094 1.28025C9.70189 0.879796 10.4261 0.908559 10.8838 1.36619L16.3838 6.86619C16.8719 7.35433 16.8719 8.14561 16.3838 8.63376C15.8956 9.12192 15.1044 9.12192 14.6162 8.63376L11.25 5.26755V13C11.25 13.6903 10.6904 14.25 10 14.25C9.30964 14.25 8.75 13.6903 8.75 13V5.26755L5.38379 8.63376C4.89563 9.12192 4.10437 9.12192 3.61621 8.63376C3.12808 8.14561 3.12806 7.35433 3.61621 6.86619L9.11621 1.36619L9.21094 1.28025Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UploadFilled20.category = 'Arrows';

export default UploadFilled20;

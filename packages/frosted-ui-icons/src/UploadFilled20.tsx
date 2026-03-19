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
        d="M17.75 16.5C18.4403 16.5 19 17.0597 19 17.75C19 18.4404 18.4404 19 17.75 19H2.25C1.55964 19 1 18.4404 1 17.75C1.00003 17.0597 1.55966 16.5 2.25 16.5H17.75ZM9.21094 1.28027C9.70189 0.879821 10.4261 0.908584 10.8838 1.36621L16.3838 6.86621C16.8719 7.35436 16.8719 8.14563 16.3838 8.63379C15.8956 9.12194 15.1044 9.12194 14.6162 8.63379L11.25 5.26758V14C11.25 14.6904 10.6904 15.25 10 15.25C9.30964 15.25 8.75 14.6904 8.75 14V5.26758L5.38379 8.63379C4.89563 9.12194 4.10437 9.12194 3.61621 8.63379C3.12808 8.14563 3.12806 7.35436 3.61621 6.86621L9.11621 1.36621L9.21094 1.28027Z"
        fill={color}
      />
    </svg>
  );
};

UploadFilled20.category = 'Arrows';

export default UploadFilled20;

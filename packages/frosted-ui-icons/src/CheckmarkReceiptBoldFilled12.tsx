import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9 0.00012207C10.1046 0.00012207 11 0.895553 11 2.00012V10.7062C10.9999 11.6264 10.0698 12.2558 9.21582 11.9132L7.86621 11.3712L6.64453 11.8712C6.2311 12.0404 5.76764 12.0401 5.35449 11.8702L4.14062 11.3712L2.78223 11.9142C1.92846 12.2552 1.0001 11.6265 1 10.7072V2.00012C1 0.895554 1.89543 0.00012207 3 0.00012207H9ZM8.45801 3.9425C8.06757 3.55229 7.43442 3.55239 7.04395 3.9425L5.27539 5.71008L4.95801 5.3927C4.56752 5.00252 3.93438 5.00252 3.54395 5.3927C3.15356 5.78324 3.15353 6.4163 3.54395 6.80676L4.56934 7.83215C4.95992 8.22241 5.59299 8.22165 5.9834 7.83118L8.45801 5.35657C8.84815 4.966 8.84839 4.33289 8.45801 3.9425Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkReceiptBoldFilled12.category = 'Money & Shopping';

export default CheckmarkReceiptBoldFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM12.001 10.25C11.5869 10.25 11.2512 10.586 11.251 11V17.25C11.2512 17.664 11.5869 18 12.001 18C12.4146 17.9995 12.7508 17.6637 12.751 17.25V11C12.7508 10.5863 12.4146 10.2505 12.001 10.25ZM12.001 6C11.3936 6 10.9006 6.49228 10.9004 7.09961C10.9004 7.70712 11.3935 8.19922 12.001 8.19922C12.608 8.19869 13.1006 7.7068 13.1006 7.09961C13.1004 6.4926 12.6079 6.00053 12.001 6Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleFilled24.category = 'Interface General';

export default InfoCircleFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const MailSquareBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.5 1C12.9853 1 15 3.01472 15 5.5V10.5C15 12.9853 12.9853 15 10.5 15H5.5C3.01472 15 1 12.9853 1 10.5V5.5C1 3.01472 3.01472 1 5.5 1H10.5ZM9.02148 9.03418C8.37503 9.33801 7.62601 9.33784 6.97949 9.03418L3 7.16309V10.5C3 11.8807 4.11929 13 5.5 13H10.5C11.8807 13 13 11.8807 13 10.5V7.16309L9.02148 9.03418ZM5.5 3C4.29814 3 3.29457 3.84814 3.05469 4.97852L7.83008 7.22363C7.93776 7.2741 8.06325 7.27423 8.1709 7.22363L12.9443 4.97852C12.7044 3.84824 11.7018 3 10.5 3H5.5Z"
        fill={color}
      />
    </svg>
  );
};

MailSquareBold16.category = 'Communication';

export default MailSquareBold16;

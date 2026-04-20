import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.002 0C13.3827 0 14.502 1.11929 14.502 2.5V14.2158C14.502 15.1403 13.5336 15.745 12.7031 15.3389L10.6885 14.3535L8.61328 15.3193C8.22513 15.4998 7.77659 15.4993 7.38867 15.3184L5.32031 14.3535L3.29785 15.3408C2.46764 15.7457 1.5003 15.1413 1.5 14.2178V2.5C1.5 1.11929 2.61929 0 4 0H12.002ZM10.7803 5.21973C10.4874 4.92683 10.0126 4.92683 9.71973 5.21973L7.125 7.81445L6.28027 6.96973C5.98738 6.67683 5.51262 6.67683 5.21973 6.96973C4.92683 7.26262 4.92683 7.73738 5.21973 8.03027L6.59473 9.40527C6.88762 9.69811 7.3624 9.69815 7.65527 9.40527L10.7803 6.28027C11.0731 5.9874 11.0731 5.51262 10.7803 5.21973Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkReceiptFilled16.category = 'Money & Shopping';

export default CheckmarkReceiptFilled16;

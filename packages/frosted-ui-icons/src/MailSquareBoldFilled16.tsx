import * as React from 'react';
import { IconProps } from './types';

export const MailSquareBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15 10.5C15 12.9853 12.9853 15 10.5 15H5.5C3.01472 15 1 12.9853 1 10.5V6.74316L6.75586 9.47754C7.54317 9.85148 8.45683 9.85148 9.24414 9.47754L15 6.74316V10.5ZM10.5 1C12.3217 1 13.8897 2.08284 14.5977 3.63965C14.5163 3.66243 14.4353 3.69104 14.3564 3.72852L8 6.74707L1.64355 3.72852C1.56436 3.69091 1.48302 3.66246 1.40137 3.63965C2.10921 2.08264 3.67816 1 5.5 1H10.5Z"
        fill={color}
      />
    </svg>
  );
};

MailSquareBoldFilled16.category = 'Communication';

export default MailSquareBoldFilled16;

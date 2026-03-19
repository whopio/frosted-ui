import * as React from 'react';
import { IconProps } from './types';

export const MailBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15 10.25C15 12.3211 13.3211 14 11.25 14H4.75C2.67893 14 1 12.3211 1 10.25V6.74316L6.75586 9.47754C7.54317 9.85148 8.45683 9.85148 9.24414 9.47754L15 6.74316V10.25ZM11.25 2C12.5689 2 13.728 2.68147 14.3965 3.71094C14.3832 3.71679 14.3697 3.72224 14.3564 3.72852L8 6.74707L1.64355 3.72852C1.63007 3.72211 1.61611 3.7169 1.60254 3.71094C2.27101 2.68122 3.43088 2 4.75 2H11.25Z"
        fill={color}
      />
    </svg>
  );
};

MailBoldFilled16.category = 'Communication';

export default MailBoldFilled16;

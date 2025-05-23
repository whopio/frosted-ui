import * as React from 'react';
import { IconProps } from './types';

export const ClockFilled24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM11 12.5C11 12.7301 11.1057 12.9475 11.2866 13.0897L14.7865 15.8397C15.1122 16.0956 15.5837 16.0391 15.8396 15.7134C16.0955 15.3877 16.039 14.9162 15.7133 14.6603L12.5 12.1355V6.0001C12.5 5.58589 12.1642 5.2501 11.75 5.2501C11.3358 5.2501 11 5.58589 11 6.0001V12.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ClockFilled24;

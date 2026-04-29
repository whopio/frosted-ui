import * as React from 'react';
import { IconProps } from './types';

export const CreditCard16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.8477 2.5C14.5873 2.50003 15.998 3.91071 15.998 5.65039V10.3496C15.998 12.0893 14.5873 13.5 12.8477 13.5H3.15039C1.41069 13.5 0 12.0893 0 10.3496V5.65039C0 3.91069 1.41069 2.5 3.15039 2.5H12.8477ZM1.5 10.3496C1.5 11.2609 2.23912 12 3.15039 12H12.8477C13.7589 12 14.498 11.2609 14.498 10.3496V7H1.5V10.3496ZM7.12793 9C7.54214 9 7.87793 9.33579 7.87793 9.75C7.87793 10.1642 7.54214 10.5 7.12793 10.5H4.22852C3.81443 10.4998 3.47852 10.1641 3.47852 9.75C3.47852 9.33588 3.81443 9.00015 4.22852 9H7.12793ZM3.15039 4C2.28985 4 1.58386 4.65922 1.50781 5.5H14.4902C14.4142 4.65923 13.7082 4.00003 12.8477 4H3.15039Z"
        fill={color}
      />
    </svg>
  );
};

CreditCard16.category = 'Money & Shopping';

export default CreditCard16;

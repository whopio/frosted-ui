import * as React from 'react';
import { IconProps } from './types';

export const PercentageBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.4395 1.43982C13.0252 0.854033 13.9748 0.854033 14.5605 1.43982C15.1463 2.02561 15.1463 2.97514 14.5605 3.56091L3.56055 14.5609C2.97474 15.1464 2.02513 15.1466 1.43945 14.5609C0.853776 13.9752 0.853994 13.0256 1.43945 12.4398L12.4395 1.43982ZM12 9.00037C13.6569 9.00037 15 10.3435 15 12.0004C14.9998 13.657 13.6567 15.0004 12 15.0004C10.3433 15.0004 9.0002 13.657 9 12.0004C9 10.3435 10.3431 9.00037 12 9.00037ZM4 1.00037C5.65685 1.00037 7 2.34351 7 4.00037C6.9998 5.65705 5.65673 7.00037 4 7.00037C2.34327 7.00037 1.0002 5.65705 1 4.00037C1 2.34351 2.34315 1.00037 4 1.00037Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PercentageBoldFilled16.category = 'Money & Shopping';

export default PercentageBoldFilled16;

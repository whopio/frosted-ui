import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.07193 2.06775C6.92379 0.57442 9.0765 0.574424 9.92837 2.06775L15.6969 12.181C16.5405 13.6608 15.4726 15.5001 13.7692 15.5004H2.23111C0.527522 15.5004 -0.541158 13.6609 0.302395 12.181L6.07193 2.06775ZM7.99966 11.0004C7.44744 11.0004 6.99966 11.4481 6.99966 12.0004C6.99979 12.5525 7.44752 13.0003 7.99966 13.0004C8.55186 13.0004 8.99953 12.5525 8.99966 12.0004C8.99966 11.4481 8.55195 11.0004 7.99966 11.0004ZM7.99966 5.00037C7.58551 5.00044 7.24966 5.3362 7.24966 5.75037V9.00037C7.24979 9.41442 7.58559 9.7503 7.99966 9.75037C8.41379 9.75037 8.74953 9.41447 8.74966 9.00037V5.75037C8.74966 5.33615 8.41387 5.00037 7.99966 5.00037Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangleFilled16.category = 'Interface General';

export default ExclamationTriangleFilled16;

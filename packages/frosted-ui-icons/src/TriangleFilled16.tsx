import * as React from 'react';
import { IconProps } from './types';

export const TriangleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.07585 2.2627C6.89653 0.724077 9.1017 0.724244 9.92253 2.2627L14.7399 11.2939C15.5144 12.7461 14.4618 14.5 12.8161 14.5H3.18327C1.53754 14.5 0.484982 12.7461 1.25944 11.2939L6.07585 2.2627Z"
        fill={color}
      />
    </svg>
  );
};

TriangleFilled16.category = 'Interface General';

export default TriangleFilled16;

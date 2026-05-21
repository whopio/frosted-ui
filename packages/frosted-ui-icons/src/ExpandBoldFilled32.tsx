import * as React from 'react';
import { IconProps } from './types';

export const ExpandBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.1895 17.6895C12.7752 17.1037 13.7248 17.1037 14.3105 17.6895C14.8963 18.2752 14.8963 19.2248 14.3105 19.8105L6.12109 28H13.25C14.0784 28 14.75 28.6716 14.75 29.5C14.75 30.3284 14.0784 31 13.25 31H2.5C1.67159 31 1.00003 30.3284 1 29.5V18.75C1 17.9216 1.67157 17.25 2.5 17.25C3.32843 17.25 4 17.9216 4 18.75V25.8789L12.1895 17.6895ZM29.5 1C30.3284 1 31 1.67157 31 2.5V13.25C31 14.0784 30.3284 14.75 29.5 14.75C28.6716 14.75 28 14.0784 28 13.25V6.12109L19.8105 14.3105C19.2248 14.8963 18.2752 14.8963 17.6895 14.3105C17.1037 13.7248 17.1037 12.7752 17.6895 12.1895L25.8789 4H18.75C17.9216 4 17.25 3.3284 17.25 2.5C17.25 1.67157 17.9216 1 18.75 1H29.5Z"
        fill={color}
      />
    </svg>
  );
};

ExpandBoldFilled32.category = 'Arrows';

export default ExpandBoldFilled32;

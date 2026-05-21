import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM7.99707 7.25C7.58286 7.25 7.24707 7.58579 7.24707 8V11.25C7.24707 11.6642 7.58286 12 7.99707 12C8.41128 12 8.74707 11.6642 8.74707 11.25V8C8.74707 7.58579 8.41128 7.25 7.99707 7.25ZM8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleFilled16.category = 'Interface General';

export default InfoCircleFilled16;

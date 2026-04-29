import * as React from 'react';
import { IconProps } from './types';

export const PauseCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM5.7002 5C5.3136 5 5 5.3136 5 5.7002V10.2998C5 10.6864 5.3136 11 5.7002 11H6.2998C6.6864 11 7 10.6864 7 10.2998V5.7002C7 5.3136 6.6864 5 6.2998 5H5.7002ZM9.7002 5C9.3136 5 9 5.3136 9 5.7002V10.2998C9 10.6864 9.3136 11 9.7002 11H10.2998C10.6864 11 11 10.6864 11 10.2998V5.7002C11 5.3136 10.6864 5 10.2998 5H9.7002Z"
        fill={color}
      />
    </svg>
  );
};

PauseCircleFilled16.category = 'Sound & Music';

export default PauseCircleFilled16;

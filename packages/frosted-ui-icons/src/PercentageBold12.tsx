import * as React from 'react';
import { IconProps } from './types';

export const PercentageBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PercentageBold12"
      {...props}
    >
      <path
        d="M10.293.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-10 10c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414l10-10zM9.5 7C10.88 7 12 8.12 12 9.5S10.88 12 9.5 12 7 10.88 7 9.5 8.12 7 9.5 7zm0 2c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5zm-7-9C3.88 0 5 1.12 5 2.5S3.88 5 2.5 5 0 3.88 0 2.5 1.12 0 2.5 0zm0 2c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5z"
        fill={color}
      />
    </svg>
  );
};

PercentageBold12.category = 'Money & Shopping';

export default PercentageBold12;

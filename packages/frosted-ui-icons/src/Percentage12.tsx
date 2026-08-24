import * as React from 'react';
import { IconProps } from './types';

export const Percentage12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Percentage12"
      {...props}
    >
      <path
        d="M10.72.22c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06l-10.5 10.5c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06L10.72.22zM9.75 7.5C10.993 7.5 12 8.507 12 9.75S10.993 12 9.75 12 7.5 10.993 7.5 9.75 8.507 7.5 9.75 7.5zm0 1.5c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75S10.164 9 9.75 9zm-7.5-9C3.493 0 4.5 1.007 4.5 2.25S3.493 4.5 2.25 4.5 0 3.493 0 2.25 1.007 0 2.25 0zm0 1.5c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75-.336-.75-.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Percentage12.category = 'Money & Shopping';

export default Percentage12;

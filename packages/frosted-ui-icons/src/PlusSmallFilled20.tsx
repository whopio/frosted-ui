import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 4C10.6904 4 11.25 4.55964 11.25 5.25V8.75H14.75C15.4404 8.75 16 9.30964 16 10C16 10.6904 15.4404 11.25 14.75 11.25H11.25V14.75C11.25 15.4404 10.6904 16 10 16C9.30964 16 8.75 15.4404 8.75 14.75V11.25H5.25C4.55964 11.25 4 10.6904 4 10C4 9.30964 4.55964 8.75 5.25 8.75H8.75V5.25C8.75 4.55964 9.30964 4 10 4Z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallFilled20.category = 'Interface General';

export default PlusSmallFilled20;

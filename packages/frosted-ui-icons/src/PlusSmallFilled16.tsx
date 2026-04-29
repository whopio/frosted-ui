import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 3C8.69036 3 9.25 3.55964 9.25 4.25V6.75H11.75C12.4404 6.75 13 7.30964 13 8C13 8.69036 12.4404 9.25 11.75 9.25H9.25V11.75C9.25 12.4404 8.69036 13 8 13C7.30964 13 6.75 12.4404 6.75 11.75V9.25H4.25C3.55964 9.25 3 8.69036 3 8C3 7.30964 3.55964 6.75 4.25 6.75H6.75V4.25C6.75 3.55964 7.30964 3 8 3Z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallFilled16.category = 'Interface General';

export default PlusSmallFilled16;

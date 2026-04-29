import * as React from 'react';
import { IconProps } from './types';

export const PlusFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1C8.69036 1 9.25 1.55964 9.25 2.25V6.75H13.75C14.4404 6.75 15 7.30964 15 8C15 8.69036 14.4404 9.25 13.75 9.25H9.25V13.75C9.25 14.4404 8.69036 15 8 15C7.30964 15 6.75 14.4404 6.75 13.75V9.25H2.25C1.55964 9.25 1 8.69036 1 8C1 7.30964 1.55964 6.75 2.25 6.75H6.75V2.25C6.75 1.55964 7.30964 1 8 1Z"
        fill={color}
      />
    </svg>
  );
};

PlusFilled16.category = 'Interface General';

export default PlusFilled16;

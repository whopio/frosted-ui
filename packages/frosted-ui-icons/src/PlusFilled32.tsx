import * as React from 'react';
import { IconProps } from './types';

export const PlusFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1C16.6904 1 17.25 1.55964 17.25 2.25V14.75H29.75C30.4404 14.75 31 15.3096 31 16C31 16.6904 30.4404 17.25 29.75 17.25H17.25V29.75C17.25 30.4404 16.6904 31 16 31C15.3096 31 14.75 30.4404 14.75 29.75V17.25H2.25C1.55964 17.25 1 16.6904 1 16C1 15.3096 1.55964 14.75 2.25 14.75H14.75V2.25C14.75 1.55964 15.3096 1 16 1Z"
        fill={color}
      />
    </svg>
  );
};

PlusFilled32.category = 'Interface General';

export default PlusFilled32;

import * as React from 'react';
import { IconProps } from './types';

export const PlusFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C10.6904 1 11.25 1.55964 11.25 2.25V8.75H17.75C18.4404 8.75 19 9.30964 19 10C19 10.6904 18.4404 11.25 17.75 11.25H11.25V17.75C11.25 18.4404 10.6904 19 10 19C9.30964 19 8.75 18.4404 8.75 17.75V11.25H2.25C1.55964 11.25 1 10.6904 1 10C1 9.30964 1.55964 8.75 2.25 8.75H8.75V2.25C8.75 1.55964 9.30964 1 10 1Z"
        fill={color}
      />
    </svg>
  );
};

PlusFilled20.category = 'Interface General';

export default PlusFilled20;

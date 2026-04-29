import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 2.75C8.82843 2.75 9.5 3.42157 9.5 4.25V6.5H11.75C12.5784 6.5 13.25 7.17157 13.25 8C13.25 8.82843 12.5784 9.5 11.75 9.5H9.5V11.75C9.5 12.5784 8.82843 13.25 8 13.25C7.17157 13.25 6.5 12.5784 6.5 11.75V9.5H4.25C3.42157 9.5 2.75 8.82843 2.75 8C2.75 7.17157 3.42157 6.5 4.25 6.5H6.5V4.25C6.5 3.42157 7.17157 2.75 8 2.75Z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallBoldFilled16.category = 'Interface General';

export default PlusSmallBoldFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 2C6.69036 2 7.25 2.55964 7.25 3.25V4.75H8.75C9.44036 4.75 10 5.30964 10 6C10 6.69036 9.44036 7.25 8.75 7.25H7.25V8.75C7.25 9.44036 6.69036 10 6 10C5.30964 10 4.75 9.44036 4.75 8.75V7.25H3.25C2.55964 7.25 2 6.69036 2 6C2 5.30964 2.55964 4.75 3.25 4.75H4.75V3.25C4.75 2.55964 5.30964 2 6 2Z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallBoldFilled12.category = 'Interface General';

export default PlusSmallBoldFilled12;

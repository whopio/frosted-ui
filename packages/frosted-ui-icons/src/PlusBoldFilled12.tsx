import * as React from 'react';
import { IconProps } from './types';

export const PlusBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C6.69036 0 7.25 0.559644 7.25 1.25V4.75H10.75C11.4404 4.75 12 5.30964 12 6C12 6.69036 11.4404 7.25 10.75 7.25H7.25V10.75C7.25 11.4404 6.69036 12 6 12C5.30964 12 4.75 11.4404 4.75 10.75V7.25H1.25C0.559644 7.25 0 6.69036 0 6C0 5.30964 0.559644 4.75 1.25 4.75H4.75V1.25C4.75 0.559644 5.30964 0 6 0Z"
        fill={color}
      />
    </svg>
  );
};

PlusBoldFilled12.category = 'Interface General';

export default PlusBoldFilled12;

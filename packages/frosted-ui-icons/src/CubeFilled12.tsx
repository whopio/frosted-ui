import * as React from 'react';
import { IconProps } from './types';

export const CubeFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CubeFilled12"
      {...props}
    >
      <path
        d="M4.999.578c.619-.358 1.381-.358 2 0l3.196 1.844c.62.358 1 1.018 1 1.733v3.69c0 .715-.38 1.375-1 1.733L7 11.423c-.619.357-1.381.357-2 0L1.803 9.577c-.62-.357-1-1.018-1-1.733v-3.69c0-.715.381-1.375 1-1.733L4.999.578zm3.839 3.8c-.206-.36-.664-.485-1.024-.28L6 5.135 4.184 4.098c-.36-.205-.818-.08-1.024.28-.205.36-.08.817.28 1.023l1.809 1.033V8.5c0 .414.336.75.75.75s.75-.336.75-.75V6.434l1.81-1.033c.36-.206.484-.664.279-1.023z"
        fill={color}
      />
    </svg>
  );
};

CubeFilled12.category = 'Objects';

export default CubeFilled12;

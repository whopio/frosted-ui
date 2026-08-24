import * as React from 'react';
import { IconProps } from './types';

export const ChecklistFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChecklistFilled12"
      {...props}
    >
      <path
        d="M7.499 0c.69 0 1.251.559 1.251 1.25v.273c1.095.153 1.938 1.09 1.938 2.227v6c0 1.243-1.008 2.25-2.25 2.25H3.561c-1.242 0-2.25-1.007-2.25-2.25v-6c0-1.137.843-2.074 1.938-2.227V1.25C3.25.559 3.812 0 4.501 0h2.998zm.781 5.22c-.293-.293-.767-.293-1.06 0L5.25 7.19l-.47-.47c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l1 1c.293.293.767.293 1.06 0l2.5-2.5c.293-.293.293-.767 0-1.06zM4.75 2.5h2.5v-1h-2.5v1z"
        fill={color}
      />
    </svg>
  );
};

ChecklistFilled12.category = 'Interface General';

export default ChecklistFilled12;

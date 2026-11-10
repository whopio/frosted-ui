import * as React from 'react';
import { IconProps } from './types';

export const AddUserFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AddUserFilled20"
      {...props}
    >
      <path
        d="M10 11.75c1.47 0 2.863.338 4.071.946-.045.178-.071.363-.071.554V14h-.75C12.008 14 11 15.007 11 16.25s1.008 2.25 2.25 2.25H14v.75c0 .263.048.515.13.75H4.5c-.754 0-1.467-.312-1.943-.836-.489-.538-.725-1.306-.463-2.113 1.033-3.191 4.23-5.3 7.906-5.301zm6.25.75c.414 0 .75.336.75.75v2.25h2.25c.414 0 .75.336.75.75s-.336.75-.75.75H17v2.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V17h-2.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.25v-2.25c0-.414.336-.75.75-.75zM10 0c2.9 0 5.25 2.35 5.25 5.25S12.9 10.5 10 10.5 4.75 8.15 4.75 5.25 7.1 0 10 0z"
        fill={color}
      />
    </svg>
  );
};

AddUserFilled20.category = 'People';

export default AddUserFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const AddUserFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AddUserFilled32"
      {...props}
    >
      <path
        d="M25.5 20c.413 0 .75.336.75.75v4h4c.413 0 .75.336.75.75s-.337.75-.75.75h-4v4c0 .414-.337.75-.75.75-.415 0-.75-.336-.75-.75v-4h-4c-.415 0-.75-.336-.75-.75s.335-.75.75-.75h4v-4c0-.414.335-.75.75-.75zM16 18.25c2.606 0 5.025.805 7.027 2.148-.016.115-.027.232-.027.352V23h-2.25c-1.381 0-2.5 1.12-2.5 2.5s1.119 2.5 2.5 2.5H23v2.25c0 .261.04.512.114.749H7.25c-1.03 0-1.994-.425-2.635-1.129-.653-.716-.967-1.724-.647-2.794C5.451 22.126 10.277 18.25 16 18.25zM15.997 1c4.28 0 7.75 3.47 7.75 7.75 0 4.28-3.47 7.75-7.75 7.75-4.28 0-7.75-3.47-7.75-7.75 0-4.28 3.47-7.75 7.75-7.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

AddUserFilled32.category = 'People';

export default AddUserFilled32;

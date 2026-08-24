import * as React from 'react';
import { IconProps } from './types';

export const AddUserFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AddUserFilled24"
      {...props}
    >
      <path
        d="M12 14c2.066 0 3.996.583 5.599 1.586-.065.21-.1.433-.1.664v1.25h-1.25c-1.242 0-2.25 1.007-2.25 2.25S15.007 22 16.25 22h1.25v1.25c0 .263.048.515.131.75H5.25c-.893 0-1.733-.37-2.29-.984-.57-.63-.838-1.52-.53-2.458C3.686 16.73 7.523 14 12 14zm7.75 1.5c.413 0 .75.336.75.75V19h2.75c.413 0 .75.336.75.75s-.337.75-.75.75H20.5v2.75c0 .414-.337.75-.75.75-.415 0-.75-.336-.75-.75V20.5h-2.75c-.415 0-.75-.336-.75-.75s.335-.75.75-.75H19v-2.75c0-.414.335-.75.75-.75zM12 0c3.45 0 6.25 2.798 6.25 6.25S15.45 12.5 12 12.5c-3.452 0-6.25-2.798-6.25-6.25S8.547 0 12 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

AddUserFilled24.category = 'People';

export default AddUserFilled24;

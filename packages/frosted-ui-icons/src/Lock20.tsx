import * as React from 'react';
import { IconProps } from './types';

export const Lock20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C13.3137 1 16 3.68629 16 7V8.21387C17.4564 8.72871 18.5 10.1173 18.5 11.75V15.25C18.5 17.3211 16.8211 19 14.75 19H5.25C3.17893 19 1.5 17.3211 1.5 15.25V11.75C1.5 10.1173 2.54359 8.72871 4 8.21387V7C4 3.68629 6.68629 1 10 1ZM5.25 9.5C4.00736 9.5 3 10.5074 3 11.75V15.25C3 16.4926 4.00736 17.5 5.25 17.5H14.75C15.9926 17.5 17 16.4926 17 15.25V11.75C17 10.5074 15.9926 9.5 14.75 9.5H5.25ZM10 2.5C7.51472 2.5 5.5 4.51472 5.5 7V8H14.5V7C14.5 4.51472 12.4853 2.5 10 2.5Z"
        fill={color}
      />
    </svg>
  );
};

Lock20.category = 'Security';

export default Lock20;

import * as React from 'react';
import { IconProps } from './types';

export const Mail32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M24.7451 3C28.7491 3.0001 31.9951 6.246 31.9951 10.25V21.75C31.9951 25.754 28.7491 28.9999 24.7451 29H7.25C3.24611 28.9998 0 25.7539 0 21.75V10.25C0 6.24607 3.24611 3.00021 7.25 3H24.7451ZM17.416 17.1055C16.5067 17.4771 15.4874 17.4771 14.5781 17.1055L1.5 11.7568V21.75C1.5 24.9255 4.07454 27.4998 7.25 27.5H24.7451C27.9207 27.4999 30.4951 24.9256 30.4951 21.75V11.7568L17.416 17.1055ZM7.25 4.5C4.11207 4.50021 1.56278 7.01403 1.50293 10.1377L15.1455 15.7168C15.6912 15.9399 16.303 15.9398 16.8486 15.7168L30.4922 10.1377C30.4323 7.01397 27.8831 4.5001 24.7451 4.5H7.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Mail32.category = 'Communication';

export default Mail32;

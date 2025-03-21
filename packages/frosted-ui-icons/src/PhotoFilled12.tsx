import * as React from 'react';
import { IconProps } from './types';

export const PhotoFilled12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M1.5 2.75C1.5 2.05964 2.05964 1.5 2.75 1.5H9.25C9.94036 1.5 10.5 2.05964 10.5 2.75V9.22437L6.4895 5.39536C5.88757 4.82066 5.08735 4.5 4.25513 4.5C3.3122 4.5 2.41619 4.91132 1.80151 5.62635L1.5 5.97707V2.75ZM0 8.0041V9.25C0 10.7688 1.23122 12 2.75 12H9.25C10.7688 12 12 10.7688 12 9.25V2.75C12 1.23122 10.7688 0 9.25 0H2.75C1.23122 0 0 1.23122 0 2.75V7.99521V8.0041ZM9 4C9 4.55228 8.55229 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55229 3 9 3.44772 9 4Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PhotoFilled12;

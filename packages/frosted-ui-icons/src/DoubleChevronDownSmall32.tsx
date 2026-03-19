import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22.0536 14.9433C22.347 14.6512 22.8219 14.652 23.1142 14.9452C23.4064 15.2386 23.4055 15.7134 23.1122 16.0058L16.9999 22.0937C16.4471 22.6442 15.5527 22.6442 14.9999 22.0937L8.88759 16.0058C8.59426 15.7134 8.59338 15.2386 8.88564 14.9452C9.17795 14.652 9.65279 14.6511 9.94619 14.9433L15.9999 20.9726L22.0536 14.9433ZM22.0536 9.71865C22.347 9.42641 22.8218 9.4273 23.1142 9.7206C23.4063 10.0141 23.4056 10.4889 23.1122 10.7812L16.9999 16.869C16.4472 17.4196 15.5527 17.4194 14.9999 16.869L8.88759 10.7812C8.5942 10.4888 8.59337 10.0141 8.88564 9.7206C9.17795 9.42721 9.65274 9.42637 9.94619 9.71865L15.9999 15.7479L22.0536 9.71865Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmall32.category = 'Arrows';

export default DoubleChevronDownSmall32;

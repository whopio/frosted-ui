import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 1C14.9706 1.00001 19 5.02945 19 10C19 12.2152 18.1974 14.2416 16.8701 15.8096L22.7803 21.7197C23.073 22.0126 23.0731 22.4875 22.7803 22.7803C22.4875 23.0731 22.0126 23.073 21.7197 22.7803L15.8096 16.8701C14.2416 18.1974 12.2152 19 10 19C5.02944 19 1 14.9706 1 10C1.00001 5.02945 5.02944 1 10 1ZM10 2.5C5.85787 2.5 2.50001 5.85787 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85788 14.1421 2.50001 10 2.5Z"
        fill={color}
      />
    </svg>
  );
};

MagnifyingGlass24.category = 'Product Icons';

export default MagnifyingGlass24;

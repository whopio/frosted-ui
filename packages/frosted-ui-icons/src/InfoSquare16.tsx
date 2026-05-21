import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.75 1C13.0972 1 15 2.90279 15 5.25V10.75C15 13.0972 13.0972 15 10.75 15H5.25C2.90279 15 1 13.0972 1 10.75V5.25C1 2.90279 2.90279 1 5.25 1H10.75ZM5.25 2.5C3.73122 2.5 2.5 3.73122 2.5 5.25V10.75C2.5 12.2688 3.73122 13.5 5.25 13.5H10.75C12.2688 13.5 13.5 12.2688 13.5 10.75V5.25C13.5 3.73122 12.2688 2.5 10.75 2.5H5.25ZM7.99707 7.25C8.41128 7.25 8.74707 7.58579 8.74707 8V11.25C8.74707 11.6642 8.41128 12 7.99707 12C7.58286 12 7.24707 11.6642 7.24707 11.25V8C7.24707 7.58579 7.58286 7.25 7.99707 7.25ZM8 4C8.55228 4 9 4.44772 9 5C9 5.55228 8.55228 6 8 6C7.44772 6 7 5.55228 7 5C7 4.44772 7.44772 4 8 4Z"
        fill={color}
      />
    </svg>
  );
};

InfoSquare16.category = 'Interface General';

export default InfoSquare16;

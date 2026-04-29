import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM23.5586 11.0752C24.2879 9.40782 22.5922 7.71207 20.9248 8.44141L13.6748 11.6133C12.7528 12.0166 12.0166 12.7529 11.6133 13.6748L8.44141 20.9248C7.71225 22.5921 9.40793 24.2877 11.0752 23.5586L18.3252 20.3867C19.2472 19.9834 19.9834 19.2472 20.3867 18.3252L23.5586 11.0752Z"
        fill={color}
      />
    </svg>
  );
};

CompassFilled32.category = 'Interface General';

export default CompassFilled32;

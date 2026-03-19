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
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM23.5586 11.0752C24.2878 9.40787 22.5921 7.71219 20.9248 8.44141L13.6748 11.6133C12.7528 12.0166 12.0166 12.7529 11.6133 13.6748L8.44141 20.9248C7.71218 22.5921 9.40788 24.2878 11.0752 23.5586L18.3252 20.3867C19.2472 19.9834 19.9834 19.2472 20.3867 18.3252L23.5586 11.0752Z"
        fill={color}
      />
    </svg>
  );
};

CompassFilled32.category = 'Product Icons';

export default CompassFilled32;

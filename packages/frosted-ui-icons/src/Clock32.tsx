import * as React from 'react';
import { IconProps } from './types';

export const Clock32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Clock32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zM16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-.25 4.25c.414 0 .75.336.75.75v9.148l4.23 3.526c.319.265.361.738.096 1.056-.265.319-.738.361-1.056.096l-4.5-3.75-.061-.056c-.133-.14-.209-.325-.209-.52V7c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Clock32.category = 'Interface General';

export default Clock32;

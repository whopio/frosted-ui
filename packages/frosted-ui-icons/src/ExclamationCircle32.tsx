import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircle32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationCircle32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zM16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-.001 19.208c.621 0 1.125.504 1.125 1.125v.025c0 .622-.504 1.125-1.125 1.125s-1.125-.503-1.125-1.125v-.025c0-.621.504-1.125 1.125-1.125zm0-13.559c.414 0 .75.336.75.75v9.184c0 .414-.336.75-.75.75s-.75-.336-.75-.75V8.399c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircle32.category = 'Interface General';

export default ExclamationCircle32;

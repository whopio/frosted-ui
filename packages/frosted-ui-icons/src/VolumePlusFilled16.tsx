import * as React from 'react';
import { IconProps } from './types';

export const VolumePlusFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VolumePlusFilled16"
      {...props}
    >
      <path
        d="M6.55 1.462c1.14-1.02 2.95-.21 2.95 1.32v10.437c0 1.53-1.81 2.34-2.95 1.32l-2.623-2.347c-.138-.123-.316-.192-.5-.192H2.25C1.007 12 0 10.993 0 9.75v-3.5C0 5.008 1.007 4 2.25 4h1.177c.184 0 .362-.068.5-.191L6.55 1.462zm6.7 3.788c.414 0 .75.336.75.75v1.25h1.25c.414 0 .75.336.75.75s-.336.75-.75.75H14V10c0 .414-.336.75-.75.75s-.75-.336-.75-.75V8.75h-1.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V6c0-.414.336-.75.75-.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumePlusFilled16.category = 'Sound & Music';

export default VolumePlusFilled16;

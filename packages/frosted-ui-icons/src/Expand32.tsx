import * as React from 'react';
import { IconProps } from './types';

export const Expand32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Expand32"
      {...props}
    >
      <path
        d="M12.47 18.47c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L3.56 29.5H13c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75V19c0-.414.336-.75.75-.75s.75.336.75.75v9.44l9.97-9.97zM30.25 1c.414 0 .75.336.75.75V13c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.56l-9.97 9.97c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l9.97-9.97H19c-.414 0-.75-.336-.75-.75S18.586 1 19 1h11.25z"
        fill={color}
      />
    </svg>
  );
};

Expand32.category = 'Arrows';

export default Expand32;

import * as React from 'react';
import { IconProps } from './types';

export const MedalFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MedalFilled12"
      {...props}
    >
      <path
        d="M10.183 10.93c.162.615-.385 1.185-1.006 1.047L6 11.269l-3.177.708c-.621.138-1.168-.432-1.006-1.047l.473-1.79C3.292 9.989 4.586 10.5 6 10.5c1.414 0 2.708-.513 3.709-1.36l.474 1.79zM6 0c2.623 0 4.75 2.127 4.75 4.75S8.623 9.5 6 9.5 1.25 7.373 1.25 4.75 3.377 0 6 0zm2.03 3.47c-.293-.293-.767-.293-1.06 0L5.5 4.94l-.47-.47c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l1 1c.293.293.767.293 1.06 0l2-2c.293-.293.293-.767 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

MedalFilled12.category = 'Interface General';

export default MedalFilled12;

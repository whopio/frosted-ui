import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleLeft12"
      {...props}
    >
      <path
        d="M7.625 12C10.04 12 12 10.04 12 7.625S10.04 3.25 7.625 3.25H2.56l1.97-1.97c.293-.293.293-.767 0-1.06-.293-.293-.767-.293-1.06 0L.22 3.47c-.293.293-.293.767 0 1.06l3.25 3.25c.293.293.767.293 1.06 0 .293-.293.293-.767 0-1.06L2.56 4.75h5.065c1.588 0 2.875 1.287 2.875 2.875S9.213 10.5 7.625 10.5H6.75c-.414 0-.75.336-.75.75s.336.75.75.75h.875z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeft12.category = 'Arrows';

export default RoundedArrowAngleLeft12;

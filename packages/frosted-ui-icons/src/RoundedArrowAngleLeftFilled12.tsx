import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleLeftFilled12"
      {...props}
    >
      <path
        d="M7.5 12C9.984 12 12 9.984 12 7.5 12 5.014 9.984 3 7.5 3H4.266l.866-.866c.488-.488.488-1.28 0-1.768s-1.28-.488-1.767 0l-3 3c-.488.488-.488 1.28 0 1.768l3 3c.488.487 1.28.487 1.767 0 .488-.489.488-1.28 0-1.768L4.267 5.5H7.5c1.105 0 2 .895 2 2 0 1.104-.895 2-2 2h-.75c-.69 0-1.25.56-1.25 1.25S6.06 12 6.75 12h.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeftFilled12.category = 'Arrows';

export default RoundedArrowAngleLeftFilled12;

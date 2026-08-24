import * as React from 'react';
import { IconProps } from './types';

export const PauseCircleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PauseCircleBoldFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zM3.95 3.5c-.386 0-.7.314-.7.7v3.6c0 .386.314.7.7.7h.6c.386 0 .7-.314.7-.7V4.2c0-.386-.314-.7-.7-.7h-.6zm3.5 0c-.386 0-.7.314-.7.7v3.6c0 .386.314.7.7.7h.6c.386 0 .7-.314.7-.7V4.2c0-.386-.314-.7-.7-.7h-.6z"
        fill={color}
      />
    </svg>
  );
};

PauseCircleBoldFilled12.category = 'Sound & Music';

export default PauseCircleBoldFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const SpeakerFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SpeakerFilled12"
      {...props}
    >
      <path
        d="M7.813 0C9.572 0 11 1.427 11 3.188v5.624C11 10.572 9.573 12 7.812 12H4.188C2.428 12 1 10.573 1 8.812V3.189C1 1.427 2.427 0 4.188 0h3.625zM6 4.75C4.757 4.75 3.75 5.757 3.75 7S4.757 9.25 6 9.25 8.25 8.243 8.25 7 7.243 4.75 6 4.75zM6 2.6c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75S6.414 2.6 6 2.6z"
        fill={color}
      />
    </svg>
  );
};

SpeakerFilled12.category = 'Sound & Music';

export default SpeakerFilled12;

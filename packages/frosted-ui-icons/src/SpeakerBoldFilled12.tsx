import * as React from 'react';
import { IconProps } from './types';

export const SpeakerBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.5625 0C9.46098 0 11 1.53902 11 3.4375V8.5625C11 10.461 9.46098 12 7.5625 12H4.4375C2.53902 12 1 10.461 1 8.5625V3.4375C1 1.53902 2.53902 0 4.4375 0H7.5625ZM5.99414 5.25C4.95861 5.25 4.11914 6.08947 4.11914 7.125C4.11914 8.16053 4.95861 9 5.99414 9C7.02967 9 7.86914 8.16053 7.86914 7.125C7.86914 6.08947 7.02967 5.25 5.99414 5.25ZM6 2.75C5.44772 2.75 5 3.19772 5 3.75C5 4.30228 5.44772 4.75 6 4.75C6.55228 4.75 7 4.30228 7 3.75C7 3.19772 6.55228 2.75 6 2.75Z"
        fill={color}
      />
    </svg>
  );
};

SpeakerBoldFilled12.category = 'Sound & Music';

export default SpeakerBoldFilled12;

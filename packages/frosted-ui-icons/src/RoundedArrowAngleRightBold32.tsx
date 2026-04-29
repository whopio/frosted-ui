import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.4996 30.9998C5.70061 30.9998 0.999594 26.2987 0.999594 20.4998C0.999722 14.7009 5.70068 9.99976 11.4996 9.99976H26.7594L19.9254 3.13159C19.4385 2.64231 19.4401 1.85099 19.9293 1.36401C20.4186 0.877398 21.21 0.878872 21.6969 1.36792L30.6363 10.3503C31.1213 10.8379 31.1211 11.6264 30.6363 12.114L21.6969 21.0964C21.2099 21.5855 20.4185 21.5872 19.9293 21.1003C19.44 20.6134 19.4384 19.8221 19.9254 19.3328L26.7242 12.4998H11.4996C7.08139 12.4998 3.49972 16.0816 3.49959 20.4998C3.49959 24.918 7.08132 28.4998 11.4996 28.4998H15.4146C16.1049 28.4998 16.6645 29.0595 16.6646 29.7498C16.6646 30.4401 16.105 30.9997 15.4146 30.9998H11.4996Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRightBold32.category = 'Arrows';

export default RoundedArrowAngleRightBold32;

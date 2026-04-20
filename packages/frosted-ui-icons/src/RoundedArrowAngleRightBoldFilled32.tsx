import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.5006 30.9998C5.70158 30.9998 1.00056 26.2987 1.00056 20.4998C1.00069 14.7009 5.70165 9.99976 11.5006 9.99976H25.9078L19.4976 3.55737C18.9139 2.97013 18.9165 2.02043 19.5035 1.43628C20.0906 0.852362 21.0403 0.855324 21.6246 1.44214L30.5631 10.4246C31.1453 11.0098 31.1454 11.9556 30.5631 12.5408L21.6246 21.5222C21.0404 22.1092 20.0907 22.112 19.5035 21.5281C18.9166 20.9437 18.9134 19.9931 19.4976 19.406L25.8726 12.9998H11.5006C7.35851 12.9998 4.00069 16.3577 4.00056 20.4998C4.00056 24.6419 7.35843 27.9998 11.5006 27.9998H15.4156C16.2438 28 16.9155 28.6716 16.9156 29.4998C16.9156 30.3281 16.2439 30.9995 15.4156 30.9998H11.5006Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRightBoldFilled32.category = 'Arrows';

export default RoundedArrowAngleRightBoldFilled32;

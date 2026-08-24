import * as React from 'react';
import { IconProps } from './types';

export const BannerPhoto16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BannerPhoto16"
      {...props}
    >
      <path
        d="M12.072 2.632c1.82 0 3.296 1.476 3.296 3.296V10c0 1.82-1.476 3.296-3.296 3.296H3.928C2.108 13.296.632 11.82.632 10V5.928c0-1.82 1.476-3.296 3.296-3.296h8.144zm-8.144 1.5c-.992 0-1.796.804-1.796 1.796V7.93l1.03-1.174c.392-.447.958-.702 1.552-.702.498 0 .977.18 1.35.503.054.046.105.095.154.147l4.7 5.004.083.087h1.071c.992 0 1.796-.804 1.796-1.796V5.928c0-.992-.804-1.796-1.796-1.796H3.928zm7.322 1.346c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25S10 7.418 10 6.728s.56-1.25 1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

BannerPhoto16.category = 'Interface General';

export default BannerPhoto16;

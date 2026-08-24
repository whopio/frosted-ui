import * as React from 'react';
import { IconProps } from './types';

export const HomeBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HomeBold16"
      {...props}
    >
      <path
        d="M5.364 2.06c1.491-1.367 3.78-1.367 5.272 0l3.267 2.994C14.602 5.694 15 6.6 15 7.547v4.667C15 13.752 13.752 15 12.214 15H10.94c-1.21 0-2.19-.981-2.19-2.19v-2.56c0-.414-.336-.75-.75-.75s-.75.336-.75.75v2.56c0 1.209-.98 2.19-2.19 2.19H3.786C2.248 15 1 13.752 1 12.213V7.547c0-.947.398-1.852 1.097-2.493L5.364 2.06zm3.92 1.473c-.726-.666-1.842-.666-2.568 0L3.448 6.529C3.163 6.79 3 7.16 3 7.547v4.667c0 .433.352.786.786.786H5.06c.105 0 .19-.086.19-.19v-2.56C5.25 8.73 6.481 7.5 8 7.5s2.75 1.231 2.75 2.75v2.56c0 .104.085.19.19.19h1.274c.434 0 .786-.353.786-.787V7.547c0-.386-.163-.757-.448-1.018L9.284 3.533z"
        fill={color}
      />
    </svg>
  );
};

HomeBold16.category = 'Buildings';

export default HomeBold16;

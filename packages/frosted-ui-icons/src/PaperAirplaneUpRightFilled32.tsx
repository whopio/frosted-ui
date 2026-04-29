import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M26.9257 0.501103C29.7436 -0.396627 32.4005 2.26022 31.5025 5.07796L24.0482 28.4643C22.7932 32.4004 17.2276 32.4133 15.9545 28.4829L13.2041 19.9914C13.1935 19.9588 13.179 19.9279 13.1668 19.8961L20.0003 13.0626C20.2931 12.7698 20.293 12.2949 20.0003 12.0019C19.7074 11.7091 19.2325 11.7091 18.9396 12.0019L12.104 18.8375C12.0748 18.8264 12.0463 18.8134 12.0163 18.8037L3.51242 16.0464C-0.416712 14.7719 -0.40245 9.2078 3.53313 7.95335L26.9257 0.501103Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightFilled32.category = 'Communication';

export default PaperAirplaneUpRightFilled32;

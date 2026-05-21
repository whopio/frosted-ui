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
        d="M26.9257 0.501042C29.7436 -0.396688 32.4005 2.26016 31.5025 5.0779L24.0482 28.4642C22.7932 32.4003 17.2276 32.4132 15.9545 28.4829L13.2041 19.9914C13.1935 19.9588 13.179 19.9278 13.1668 19.8961L20.0003 13.0625C20.2931 12.7697 20.293 12.2948 20.0003 12.0019C19.7074 11.709 19.2325 11.709 18.9396 12.0019L12.104 18.8375C12.0748 18.8263 12.0463 18.8133 12.0163 18.8036L3.51242 16.0463C-0.416712 14.7718 -0.40245 9.20774 3.53313 7.95328L26.9257 0.501042Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightFilled32.category = 'Communication';

export default PaperAirplaneUpRightFilled32;

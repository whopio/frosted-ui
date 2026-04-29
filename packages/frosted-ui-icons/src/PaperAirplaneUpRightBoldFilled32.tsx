import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M25.166 1.20579C28.6459 0.0985303 31.9262 3.37868 30.8187 6.8585L23.9009 28.5937C22.5806 32.742 16.7264 32.7859 15.3445 28.658L12.6956 20.7403L19.8081 13.6278C20.1987 13.2373 20.1987 12.6041 19.8081 12.2136C19.4176 11.8232 18.7844 11.8231 18.3939 12.2136L11.2787 19.3289L3.36237 16.6786C-0.764603 15.2959 -0.720256 9.44306 3.42728 8.12287L25.166 1.20579Z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpRightBoldFilled32.category = 'Communication';

export default PaperAirplaneUpRightBoldFilled32;

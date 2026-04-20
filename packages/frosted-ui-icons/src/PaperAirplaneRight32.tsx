import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRight32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M29.0285 19.2347C31.6558 17.877 31.6559 14.1196 29.0285 12.7621L7.22088 1.49646C3.5502 -0.399324 -0.394321 3.52697 1.48455 7.20642L5.54412 15.1556C5.81341 15.6829 5.81326 16.308 5.54412 16.8353L1.48064 24.7982C-0.396488 28.4777 3.54803 32.4021 7.21795 30.5062L29.0285 19.2347ZM28.34 14.0951C29.8853 14.8937 29.8853 17.103 28.34 17.9017L6.52947 29.1732C4.15468 30.4 1.60201 27.8609 2.81658 25.4799L6.88006 17.517C7.00566 17.2709 7.09842 17.0128 7.15936 16.7494H15.2492C15.6634 16.7494 15.9992 16.4136 15.9992 15.9994C15.9992 15.5852 15.6634 15.2494 15.2492 15.2494H7.16228C7.1014 14.9831 7.00702 14.7226 6.88006 14.474L2.82049 6.52478C1.60473 4.14384 4.15714 1.60286 6.5324 2.82947L28.34 14.0951Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRight32.category = 'Communication';

export default PaperAirplaneRight32;

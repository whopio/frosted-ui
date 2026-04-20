import * as React from 'react';
import { IconProps } from './types';

export const HeadphonesBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C8.00926 0 9.5467 0.72845 10.5684 1.90723C11.5698 3.06269 12 4.562 12 6V9C12 10.6569 10.6569 12 9 12H8.5C7.67157 12 7 11.3284 7 10.5V7.5C7 6.67157 7.67157 6 8.5 6H9C9.351 6 9.68694 6.06306 10 6.17383V6C10 4.93805 9.68017 3.9373 9.05664 3.21777C8.4533 2.52162 7.49068 2 6 2C4.50932 2 3.5467 2.52162 2.94336 3.21777C2.31983 3.9373 2 4.93805 2 6V6.17383C2.31306 6.06306 2.649 6 3 6H3.5C4.32843 6 5 6.67157 5 7.5V10.5C5 11.3284 4.32843 12 3.5 12H3C1.34315 12 0 10.6569 0 9V6C0 4.562 0.430237 3.06269 1.43164 1.90723C2.4533 0.72845 3.99074 0 6 0ZM3 8C2.44772 8 2 8.44772 2 9C2 9.55228 2.44772 10 3 10V8ZM9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8V10Z"
        fill={color}
      />
    </svg>
  );
};

HeadphonesBold12.category = 'Sound & Music';

export default HeadphonesBold12;

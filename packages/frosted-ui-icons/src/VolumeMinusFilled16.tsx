import * as React from 'react';
import { IconProps } from './types';

export const VolumeMinusFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.5498 1.46225C7.69 0.442334 9.49995 1.25174 9.5 2.78159V13.2191C9.49977 14.7487 7.68994 15.5581 6.5498 14.5384L3.92676 12.1917C3.78924 12.0687 3.61128 12.0003 3.42676 12.0003H2.25C1.00743 12.0003 0.000121755 10.9929 0 9.75033V6.25034C3.35017e-06 5.0077 1.00736 4.00034 2.25 4.00034H3.42676C3.61124 4.00034 3.78926 3.93191 3.92676 3.80893L6.5498 1.46225ZM15.25 7.25034C15.6642 7.25034 16 7.58612 16 8.00034C15.9999 8.41444 15.6641 8.75034 15.25 8.75034H12.25C11.8359 8.75034 11.5001 8.41444 11.5 8.00034C11.5 7.58612 11.8358 7.25034 12.25 7.25034H15.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeMinusFilled16.category = 'Sound & Music';

export default VolumeMinusFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const VolumeBlankFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.5498 1.46225C7.69 0.442334 9.49995 1.25174 9.5 2.78159V13.2191C9.49977 14.7487 7.68994 15.5581 6.5498 14.5384L3.92676 12.1917C3.78924 12.0687 3.61128 12.0003 3.42676 12.0003H2.25C1.00743 12.0003 0.000121755 10.9929 0 9.75033V6.25034C3.35017e-06 5.0077 1.00736 4.00034 2.25 4.00034H3.42676C3.61124 4.00034 3.78926 3.93191 3.92676 3.80893L6.5498 1.46225Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeBlankFilled16.category = 'Sound & Music';

export default VolumeBlankFilled16;

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
        d="M6.5498 1.46216C7.69 0.442243 9.49995 1.25165 9.5 2.78149V13.219C9.49977 14.7487 7.68994 15.558 6.5498 14.5383L3.92676 12.1917C3.78924 12.0686 3.61128 12.0002 3.42676 12.0002H2.25C1.00743 12.0002 0.000121755 10.9928 0 9.75024V6.25024C3.35017e-06 5.00761 1.00736 4.00024 2.25 4.00024H3.42676C3.61124 4.00024 3.78926 3.93182 3.92676 3.80884L6.5498 1.46216ZM15.25 7.25024C15.6642 7.25024 16 7.58603 16 8.00024C15.9999 8.41435 15.6641 8.75024 15.25 8.75024H12.25C11.8359 8.75024 11.5001 8.41435 11.5 8.00024C11.5 7.58603 11.8358 7.25024 12.25 7.25024H15.25Z"
        fill={color}
      />
    </svg>
  );
};

VolumeMinusFilled16.category = 'Sound & Music';

export default VolumeMinusFilled16;

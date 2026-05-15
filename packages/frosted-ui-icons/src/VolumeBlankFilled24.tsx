import * as React from 'react';
import { IconProps } from './types';

export const VolumeBlankFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.78613 1.68243C11.3813 0.180406 13.9999 1.31158 14 3.50274V20.4979C13.9998 22.6891 11.3813 23.8197 9.78613 22.3172L5.78027 18.5447C5.40932 18.1954 4.91875 17.9999 4.40918 17.9998H3.25C1.45507 17.9998 0 16.5447 0 14.7498V9.24981C0.000233069 7.45508 1.45522 5.99981 3.25 5.99981H4.40918C4.91878 5.9997 5.40932 5.80529 5.78027 5.45586L9.78613 1.68243Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeBlankFilled24.category = 'Sound & Music';

export default VolumeBlankFilled24;

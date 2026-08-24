import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmarkFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldCheckmarkFilled24"
      {...props}
    >
      <path
        d="M11.004.186c.64-.248 1.351-.248 1.992 0l7.743 3c1.062.412 1.761 1.433 1.761 2.571v7.41c0 3.153-2.308 5.71-4.564 7.476-2.294 1.796-4.75 2.945-5.446 3.254-.316.14-.664.14-.98 0-.697-.31-3.152-1.458-5.446-3.254C3.808 18.877 1.5 16.32 1.5 13.168v-7.41c0-1.139.7-2.16 1.76-2.572l7.744-3zm5.132 8.585c-.293-.293-.768-.293-1.06 0l-4.49 4.488-1.477-1.477c-.292-.293-.767-.293-1.06 0-.293.293-.293.768 0 1.06l2.008 2.008c.293.293.767.293 1.06 0l5.019-5.018c.292-.293.292-.768 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

ShieldCheckmarkFilled24.category = 'Security';

export default ShieldCheckmarkFilled24;

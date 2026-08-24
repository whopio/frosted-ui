import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfFilled24"
      {...props}
    >
      <path
        d="M11.004.186c.64-.248 1.351-.248 1.992 0l7.743 3c1.062.412 1.761 1.433 1.761 2.572v7.41c0 3.152-2.308 5.709-4.564 7.475-2.294 1.796-4.75 2.945-5.446 3.254-.316.14-.664.14-.98 0-.696-.309-3.152-1.458-5.446-3.254C3.808 18.877 1.5 16.32 1.5 13.168v-7.41c0-1.139.7-2.16 1.76-2.572l7.744-3zM12 22.47c.783-.355 2.975-1.414 5.01-3.007C19.2 17.749 21 15.583 21 13.168v-7.41c0-.52-.319-.986-.803-1.173l-7.743-3c-.146-.057-.3-.085-.453-.085v20.97z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfFilled24.category = 'Security';

export default ShieldHalfFilled24;

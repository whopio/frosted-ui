import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.6946 7.68488C13.283 7.10196 14.2326 7.1064 14.8157 7.69464C15.3984 8.28301 15.3941 9.2327 14.8059 9.81574L9.26298 15.3099C8.53257 16.0339 7.35344 16.0292 6.62919 15.2991L1.18485 9.80597C0.601889 9.21758 0.606321 8.26799 1.19462 7.68488C1.78301 7.10191 2.7326 7.10634 3.31571 7.69464L7.95927 12.3782L12.6946 7.68488ZM12.6907 1.18976C13.2765 0.604049 14.226 0.604078 14.8118 1.18976C15.3973 1.77556 15.3975 2.72516 14.8118 3.31086L9.31669 8.80597C8.58936 9.53319 7.41027 9.53305 6.6829 8.80597L1.18974 3.31086C0.604112 2.72503 0.604032 1.77546 1.18974 1.18976C1.77557 0.604182 2.72515 0.604072 3.31083 1.18976L7.99931 5.88019L12.6907 1.18976Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBoldFilled16.category = 'Arrows';

export default DoubleChevronDownBoldFilled16;

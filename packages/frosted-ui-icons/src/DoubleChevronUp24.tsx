import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUp24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.7196 14.2836C22.0124 14.5764 22.4871 14.5763 22.7801 14.2836C23.073 13.9908 23.0737 13.516 22.7811 13.223L12.952 3.39097C12.4251 2.86429 11.5706 2.86412 11.0438 3.39097L1.21467 13.223C0.922011 13.5158 0.922182 13.9907 1.21467 14.2836C1.50757 14.5764 1.98236 14.5764 2.27522 14.2836L11.9969 4.55894L21.7196 14.2836ZM21.7196 20.7806C22.0124 21.0735 22.4872 21.0734 22.7801 20.7806C23.073 20.4878 23.0737 20.013 22.7811 19.7201L12.952 9.88804C12.4251 9.36115 11.5706 9.36112 11.0438 9.88804L1.21467 19.7201C0.921908 20.0129 0.921956 20.4878 1.21467 20.7806C1.50758 21.0734 1.98237 21.0735 2.27522 20.7806L11.9969 11.056L21.7196 20.7806Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUp24.category = 'Arrows';

export default DoubleChevronUp24;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M28.6961 12.6895C29.2819 12.1039 30.2314 12.1038 30.8172 12.6895C31.4027 13.2752 31.4027 14.2248 30.8172 14.8106L17.6492 27.9786C16.7391 28.8887 15.2633 28.8887 14.3533 27.9786L1.18925 14.8106C0.603618 14.2248 0.60355 13.2752 1.18925 12.6895C1.77506 12.1039 2.72463 12.1038 3.31034 12.6895L16.0008 25.3838L28.6961 12.6895ZM28.6961 3.6895C29.2819 3.10388 30.2314 3.10378 30.8172 3.6895C31.4027 4.27524 31.4027 5.22485 30.8172 5.81059L17.6492 18.9786C16.7391 19.8886 15.2633 19.8887 14.3533 18.9786L1.18925 5.81059C0.603627 5.22478 0.603565 4.27521 1.18925 3.6895C1.77506 3.10385 2.72463 3.1038 3.31034 3.6895L16.0008 16.3838L28.6961 3.6895Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBoldFilled32.category = 'Arrows';

export default DoubleChevronDownBoldFilled32;

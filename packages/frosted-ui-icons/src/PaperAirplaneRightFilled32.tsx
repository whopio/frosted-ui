import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M29.0285 19.2347C31.6558 17.8769 31.6559 14.1195 29.0285 12.762L7.22088 1.4964C3.55018 -0.399395 -0.394369 3.5269 1.48455 7.20636L5.54412 15.1556C5.5597 15.1861 5.57137 15.2182 5.58514 15.2493H15.2492C15.6633 15.2493 15.9991 15.5852 15.9992 15.9993C15.9992 16.4135 15.6634 16.7493 15.2492 16.7493H5.58221C5.56943 16.7779 5.55841 16.8073 5.54412 16.8353L1.48065 24.7982C-0.396461 28.4777 3.54804 32.402 7.21795 30.5062L29.0285 19.2347Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightFilled32.category = 'Communication';

export default PaperAirplaneRightFilled32;

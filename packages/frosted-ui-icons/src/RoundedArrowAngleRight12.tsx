import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRight12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.37506 12C1.95887 11.9999 5.72205e-05 10.0412 5.72205e-05 7.625C5.72205e-05 5.2088 1.95887 3.25007 4.37506 3.25H9.43951L7.46978 1.28027C7.17697 0.987396 7.17697 0.512604 7.46978 0.219727C7.76266 -0.0731459 8.23743 -0.0731039 8.53033 0.219727L11.7803 3.46973C12.0732 3.76262 12.0732 4.23738 11.7803 4.53027L8.53033 7.78027C8.23743 8.0731 7.76266 8.07315 7.46978 7.78027C7.17697 7.4874 7.17697 7.0126 7.46978 6.71973L9.43951 4.75H4.37506C2.7873 4.75007 1.50006 6.03722 1.50006 7.625C1.50006 9.21278 2.7873 10.4999 4.37506 10.5H5.25006C5.66427 10.5 6.00006 10.8358 6.00006 11.25C6.00006 11.6642 5.66427 12 5.25006 12H4.37506Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRight12.category = 'Arrows';

export default RoundedArrowAngleRight12;

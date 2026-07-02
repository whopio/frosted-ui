import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.7197 6.21973C17.0126 5.92713 17.4875 5.92693 17.7803 6.21973C18.0729 6.51253 18.0728 6.9874 17.7803 7.28027L13.0605 12L17.7803 16.7197C18.0728 17.0126 18.0729 17.4875 17.7803 17.7803C17.4875 18.073 17.0126 18.0729 16.7197 17.7803L12 13.0605L7.28027 17.7803C6.98742 18.0731 6.51262 18.073 6.21973 17.7803C5.92684 17.4874 5.92687 17.0126 6.21973 16.7197L10.9395 12L6.21973 7.28027C5.92684 6.98739 5.92687 6.51262 6.21973 6.21973C6.51263 5.927 6.98743 5.92689 7.28027 6.21973L12 10.9395L16.7197 6.21973Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmall24.category = 'Interface General';

export default XMarkSmall24;

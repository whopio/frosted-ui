import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.636 9.72301C13.9289 9.43017 14.4037 9.43026 14.6966 9.72301C14.9894 10.0158 14.9893 10.4906 14.6966 10.7836L10.8255 14.6576C10.3698 15.1134 9.62976 15.1134 9.17413 14.6576L5.30304 10.7836C5.01035 10.4907 5.01037 10.0158 5.30304 9.72301C5.59597 9.43027 6.07077 9.4302 6.36359 9.72301L9.99933 13.3607L13.636 9.72301ZM13.636 5.22008C13.9289 4.92724 14.4037 4.92733 14.6966 5.22008C14.9894 5.5129 14.9893 5.98771 14.6966 6.28063L10.8255 10.1547C10.3698 10.6105 9.62978 10.6105 9.17413 10.1547L5.30304 6.28063C5.01032 5.98773 5.01031 5.5129 5.30304 5.22008C5.59597 4.92734 6.07077 4.92727 6.36359 5.22008L9.99933 8.85778L13.636 5.22008Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmall20.category = 'Arrows';

export default DoubleChevronDownSmall20;

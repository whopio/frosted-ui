import * as React from 'react';
import { IconProps } from './types';

export const TagFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TagFilled20"
      {...props}
    >
      <path
        d="M15.5024 0.997803C17.4351 0.997954 19.0021 2.56511 19.0024 4.4978V9.42163C19.0023 10.6812 18.5014 11.8894 17.6108 12.78L12.6323 17.7585C10.9725 19.4183 8.28123 19.4184 6.62151 17.7585L2.24163 13.3787C0.58236 11.7189 0.582073 9.02749 2.24163 7.36792L7.22112 2.3894C8.11185 1.49876 9.3199 0.997867 10.5795 0.997803H15.5024ZM12.7504 4.99976C11.5079 4.99976 10.5006 6.00723 10.5004 7.24976C10.5004 8.4924 11.5078 9.49976 12.7504 9.49976C13.9931 9.49976 15.0004 8.4924 15.0004 7.24976C15.0003 6.00723 13.993 4.99976 12.7504 4.99976Z"
        fill={color}
      />
    </svg>
  );
};

TagFilled20.category = 'Interface General';

export default TagFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.2933 12.4998C16.6838 12.8902 17.3168 12.8903 17.7073 12.4998C18.0975 12.1093 18.0976 11.4762 17.7073 11.0858L13.0608 6.43929C12.4751 5.85373 11.5255 5.85388 10.9397 6.43929L6.29325 11.0858C5.90273 11.4763 5.90274 12.1093 6.29325 12.4998C6.68378 12.8902 7.31683 12.8903 7.70732 12.4998L12.0003 8.20686L16.2933 12.4998ZM16.2933 17.7498C16.6838 18.1402 17.3168 18.1403 17.7073 17.7498C18.0975 17.3593 18.0976 16.7262 17.7073 16.3358L13.0608 11.6893C12.4752 11.1037 11.5255 11.1039 10.9397 11.6893L6.29325 16.3358C5.90273 16.7263 5.90274 17.3593 6.29325 17.7498C6.68378 18.1402 7.31683 18.1403 7.70732 17.7498L12.0003 13.4569L16.2933 17.7498Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBold24.category = 'Arrows';

export default DoubleChevronUpSmallBold24;

import * as React from 'react';
import { IconProps } from './types';

export const CompassBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM14.7861 7.01855C15.2004 5.92537 14.1763 4.85424 13.0859 5.17773L12.9805 5.21289L8.61133 6.87012C7.8087 7.17458 7.17463 7.80873 6.87012 8.61133L5.21289 12.9805C4.78489 14.1089 5.89013 15.214 7.01855 14.7861L11.3877 13.1289C12.1904 12.8244 12.8244 12.1904 13.1289 11.3877L14.7861 7.01855Z"
        fill={color}
      />
    </svg>
  );
};

CompassBoldFilled20.category = 'Interface General';

export default CompassBoldFilled20;

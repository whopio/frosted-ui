import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M4.3931 8.93406C3.69536 9.74433 4.27103 10.9997 5.34031 10.9997H7.99992V20.2497C7.99992 21.2162 8.78342 21.9997 9.74992 21.9997H14.2499C15.2164 21.9997 15.9999 21.2162 15.9999 20.2497V10.9997H18.6595C19.7288 10.9997 20.3045 9.74433 19.6067 8.93406L13.326 1.64031C12.6278 0.829531 11.372 0.829533 10.6738 1.64031L4.3931 8.93406Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowFatUpFilled24;

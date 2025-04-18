import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquare16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.1667 9.33333V11.3667C12.1667 12.1134 12.1667 12.4868 12.0213 12.772C11.8935 13.0229 11.6895 13.2269 11.4387 13.3547C11.1535 13.5 10.7801 13.5 10.0333 13.5H4.63333C3.8866 13.5 3.51323 13.5 3.22801 13.3547C2.97713 13.2269 2.77315 13.0229 2.64533 12.772C2.5 12.4868 2.5 12.1134 2.5 11.3667V5.91667C2.5 5.21706 2.5 4.86725 2.62801 4.59659C2.75991 4.31773 2.9844 4.09324 3.26326 3.96135C3.53392 3.83333 3.88373 3.83333 4.58333 3.83333H6.16667M9.16667 2.5H13.5M13.5 2.5V6.83333M13.5 2.5L7.33333 8.66667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpRightFromSquare16;

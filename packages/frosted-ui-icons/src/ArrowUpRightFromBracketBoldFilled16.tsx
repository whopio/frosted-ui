import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.5 8.24971C14.3284 8.24971 15 8.92133 15 9.74971V10.4997C15 12.985 12.9853 14.9997 10.5 14.9997H5.5C3.01472 14.9997 1 12.985 1 10.4997V9.74971C1.00005 8.92133 1.6716 8.24971 2.5 8.24971C3.3284 8.24971 3.99995 8.92133 4 9.74971V10.4997C4 11.3281 4.67157 11.9997 5.5 11.9997H10.5C11.3284 11.9997 12 11.3281 12 10.4997V9.74971C12 8.92133 12.6716 8.24971 13.5 8.24971ZM9.93945 1.43917C10.5252 0.853449 11.4748 0.853449 12.0605 1.43917L14.0605 3.43917C14.6463 4.02493 14.6463 4.97447 14.0605 5.56026L12.0605 7.56026C11.4748 8.14605 10.5252 8.14605 9.93945 7.56026C9.53452 7.15529 9.4095 6.5765 9.56445 6.06417C8.9485 6.2508 8.50005 6.82283 8.5 7.49971V9.49971C8.5 10.3281 7.82843 10.9997 7 10.9997C6.17157 10.9997 5.5 10.3281 5.5 9.49971V7.49971C5.50005 5.15175 7.29837 3.22409 9.59277 3.01827C9.39721 2.4864 9.51242 1.86619 9.93945 1.43917Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketBoldFilled16.category = 'Arrows';

export default ArrowUpRightFromBracketBoldFilled16;

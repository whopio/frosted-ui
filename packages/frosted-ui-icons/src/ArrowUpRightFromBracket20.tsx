import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracket20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M2.5 13.75L2.5 15.75C2.5 16.7165 3.2835 17.5 4.25 17.5H15.75C16.7165 17.5 17.5 16.7165 17.5 15.75V13.75C17.5 13.3358 17.8358 13 18.25 13C18.6642 13 19 13.3358 19 13.75V15.75C19 17.5449 17.5449 19 15.75 19H4.25C2.45507 19 1 17.5449 1 15.75L1 13.75C1 13.3358 1.33579 13 1.75 13C2.16421 13 2.5 13.3358 2.5 13.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M12.6971 1.49321C12.977 1.18787 13.4515 1.16724 13.7568 1.44714L16.7568 4.19714C16.9118 4.33919 17 4.53977 17 4.75C17 4.96023 16.9118 5.16081 16.7568 5.30287L13.7568 8.05287C13.4515 8.33276 12.977 8.31214 12.6971 8.0068C12.4172 7.70146 12.4379 7.22703 12.7432 6.94714L14.3219 5.5H11.375C10.0633 5.5 9 6.56333 9 7.875V13.25C9 13.6642 8.66421 14 8.25 14C7.83579 14 7.5 13.6642 7.5 13.25V7.875C7.5 5.7349 9.2349 4 11.375 4H14.3219L12.7432 2.55287C12.4379 2.27298 12.4172 1.79855 12.6971 1.49321Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ArrowUpRightFromBracket20;

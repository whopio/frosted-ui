import * as React from 'react';
import { IconProps } from './types';

export const LockOpenBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C12.0577 1 13.8726 2.03644 14.9531 3.61523C15.3823 4.24257 14.8597 4.99974 14.0996 5C13.7064 5 13.3517 4.78256 13.1035 4.47754C12.3702 3.57612 11.2526 3 10 3C7.79086 3 6 4.79086 6 7V7.75H14.5C16.7091 7.75 18.5 9.54086 18.5 11.75V15C18.5 17.2091 16.7091 19 14.5 19H5.5C3.29086 19 1.5 17.2091 1.5 15V11.75C1.5 10.0715 2.53431 8.63549 4 8.04199V7C4 3.68629 6.68629 1 10 1ZM5.5 9.75C4.39543 9.75 3.5 10.6454 3.5 11.75V15C3.5 16.1046 4.39543 17 5.5 17H14.5C15.6046 17 16.5 16.1046 16.5 15V11.75C16.5 10.6454 15.6046 9.75 14.5 9.75H5.5Z"
        fill={color}
      />
    </svg>
  );
};

LockOpenBold20.category = 'Security';

export default LockOpenBold20;

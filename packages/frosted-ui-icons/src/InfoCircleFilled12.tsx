import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM4.96875 4.6543C4.55454 4.6543 4.21875 4.99008 4.21875 5.4043C4.21875 5.81851 4.55454 6.1543 4.96875 6.1543H5.46875V7.65417H4.96875C4.55454 7.65417 4.21875 7.98996 4.21875 8.40417C4.21875 8.81839 4.55454 9.15417 4.96875 9.15417H6.21283L6.21875 9.1542L6.22467 9.15417H7.46865C7.88286 9.15417 8.21865 8.81839 8.21865 8.40417C8.21865 7.98996 7.88286 7.65417 7.46865 7.65417H6.96875V5.4043C6.96875 4.99008 6.63296 4.6543 6.21875 4.6543H4.96875ZM5.96875 4.15833C6.38296 4.15833 6.71875 3.82254 6.71875 3.40833C6.71875 2.99411 6.38296 2.65833 5.96875 2.65833C5.55454 2.65833 5.21875 2.99411 5.21875 3.40833C5.21875 3.82254 5.55454 4.15833 5.96875 4.15833Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default InfoCircleFilled12;

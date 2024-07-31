import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7.99952 2.91377C7.99952 2.19285 7.14619 1.81206 6.60963 2.29356L0.942025 7.37989C0.573035 7.71102 0.573037 8.28915 0.942025 8.62029L6.60963 13.7066C7.14619 14.1881 7.99952 13.8073 7.99952 13.0864V10.8367C10.4952 10.87 11.8011 11.1579 12.5869 11.602C13.3834 12.0522 13.7012 12.6879 14.2031 13.6918L14.219 13.7237C14.3227 13.9311 14.5554 14.04 14.7811 13.9867C15.0068 13.9334 15.1662 13.732 15.1662 13.5001C15.1662 10.6565 14.7983 8.53002 13.5857 7.13095C12.4279 5.79499 10.6041 5.23413 7.99952 5.17251V2.91377Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled16;

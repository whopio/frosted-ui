import * as React from 'react';
import { IconProps } from './types';

export const WhopLogo20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4.54368 5.90051C3.49215 5.90051 2.76728 6.3619 2.21873 6.88367 2.21873 6.88367 1.99723 7.09357 2.00003 7.09997L4.30379 9.40373 6.60715 7.09997C6.17094 6.49944 5.34851 5.90051 4.54368 5.90051zM10.2323 5.90051C9.18077 5.90051 8.4559 6.3619 7.90735 6.88367 7.90735 6.88367 7.70504 7.08798 7.69584 7.09997L4.84833 9.94789 7.14849 12.248 12.2958 7.09997C11.8596 6.49944 11.0375 5.90051 10.2323 5.90051zM15.9366 5.90051C14.885 5.90051 14.1602 6.3619 13.6116 6.88367 13.6116 6.88367 13.4009 7.08958 13.3929 7.09997L7.69669 12.797 8.29961 13.3999C9.23239 14.3327 10.7593 14.3327 11.6921 13.3999L17.9928 7.09997H18C17.5638 6.49944 16.7418 5.90051 15.9366 5.90051z"
          fill={color}
        />
      </svg>
    );
  },
);

export default WhopLogo20;

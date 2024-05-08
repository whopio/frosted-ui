import * as React from 'react';
import { IconProps } from './types';

export const Profile20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.1259 5.41666C13.1259 7.14255 11.7268 8.54166 10.0009 8.54166 8.27502 8.54166 6.87592 7.14255 6.87592 5.41666 6.87592 3.69076 8.27502 2.29166 10.0009 2.29166 11.7268 2.29166 13.1259 3.69076 13.1259 5.41666zM10.0009 11.0417C7.17497 11.0417 5.03092 12.7202 4.153 15.0941 3.81233 16.0152 4.59953 16.875 5.58163 16.875H14.4202C15.4023 16.875 16.1895 16.0152 15.8488 15.0941 14.9709 12.7202 12.8269 11.0417 10.0009 11.0417z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Profile20;

import * as React from 'react';
import { IconProps } from './types';

export const EditProfile32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <circle cx="15" cy="7" r="6" stroke={color} strokeWidth="1.5" />
        <path
          d="M1 30.0001C1 21.5001 10.5 15 18 18.0001"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M23.4711 18.9219L17.6605 24.7326C17.1788 25.2143 16.8754 25.8456 16.8001 26.5226L16.4582 29.6002C16.4016 30.1097 16.8321 30.5403 17.3416 30.4836L20.4192 30.1417C21.0962 30.0665 21.7275 29.763 22.2092 29.2814L28.0199 23.4707M23.4711 18.9219L25.1769 17.2162C26.433 15.96 28.4696 15.96 29.7257 17.2162V17.2162C30.9818 18.4723 30.9818 20.5088 29.7257 21.7649L28.0199 23.4707M23.4711 18.9219L28.0199 23.4707"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default EditProfile32;

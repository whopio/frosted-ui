import * as React from 'react';
import { IconProps } from './types';

export const XMark12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.93928 5.99988L2.46445 8.47471C2.17156 8.7676 2.17156 9.24247 2.46445 9.53537C2.75735 9.82826 3.23222 9.82826 3.52511 9.53537L5.99994 7.06054L8.47486 9.53546C8.76775 9.82835 9.24263 9.82835 9.53552 9.53546C9.82841 9.24256 9.82841 8.76769 9.53552 8.4748L7.0606 5.99988L9.53552 3.52496C9.82841 3.23207 9.82841 2.75719 9.53552 2.4643C9.24263 2.17141 8.76775 2.17141 8.47486 2.4643L5.99994 4.93922L3.52511 2.46439C3.23222 2.1715 2.75734 2.1715 2.46445 2.46439C2.17156 2.75728 2.17156 3.23216 2.46445 3.52505L4.93928 5.99988Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default XMark12;

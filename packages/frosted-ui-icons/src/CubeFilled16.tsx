import * as React from 'react';
import { IconProps } from './types';

export const CubeFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.45312 0.914062C7.78125 0.804688 8.19141 0.804688 8.51953 0.914062L13.9883 2.99219C14.5898 3.21094 15 3.78516 15 4.44141V11.0859C15 11.7422 14.5898 12.2891 13.9883 12.5352L8.51953 14.6133C8.19141 14.7227 7.78125 14.7227 7.45312 14.6133L1.98438 12.5352C1.38281 12.2891 1 11.7422 1 11.0859V4.44141C1 3.78516 1.38281 3.21094 1.98438 2.99219L7.45312 0.914062ZM8.05469 2.14453C8.02734 2.14453 7.94531 2.14453 7.91797 2.14453L2.72266 4.11328L8 6.19141L13.25 4.11328L8.05469 2.14453ZM2.44922 11.3047L7.34375 13.1641V7.33984L2.3125 5.37109V11.0859C2.3125 11.1953 2.36719 11.2773 2.44922 11.3047ZM8.65625 13.1641L13.5234 11.3047C13.6055 11.2773 13.6875 11.1953 13.6875 11.0859V5.37109L8.65625 7.33984V13.1641Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default CubeFilled16;

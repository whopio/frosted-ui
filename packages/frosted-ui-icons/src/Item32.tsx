import * as React from 'react';
import { IconProps } from './types';

export const Item32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M5.16047 23.5086L14.1482 29.2097C14.7046 29.5626 15.3498 29.75 16.0087 29.75 16.6676 29.75 17.3128 29.5626 17.8692 29.2097L26.8569 23.5086C27.7244 22.9584 28.25 22.0026 28.25 20.9753V11.0247C28.25 9.99743 27.7244 9.0416 26.8569 8.49136L17.8692 2.7903C17.3128 2.43739 16.6676 2.25 16.0087 2.25 15.3498 2.25 14.7046 2.43739 14.1482 2.7903L5.16047 8.49136C4.293 9.0416 3.7674 9.99743 3.7674 11.0247V20.9753C3.7674 22.0026 4.29301 22.9584 5.16047 23.5086zM15.9993 15.6786V24.1123M16.0094 15.6786L23.1293 11.8253M15.9993 15.6786L8.87933 11.8253"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Item32;

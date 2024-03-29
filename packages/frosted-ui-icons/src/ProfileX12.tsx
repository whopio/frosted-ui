import * as React from 'react';
import { IconProps } from './types';

export const ProfileX12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.0006 8L9.0006 9M9.0006 9L8.0006 10M9.0006 9L8.0006 8M9.0006 9L10.0006 10M5.9268 6.62565C4.26771 6.6544 3.01091 7.6529 2.49183 9.05645C2.28743 9.6091 2.75932 10.125 3.34857 10.125H6.1256M5.9268 6.62565C5.9513 6.6252 5.9759 6.625 6.0006 6.625C6.26065 6.625 6.51105 6.6487 6.7506 6.69395M5.9268 6.62565C5.60175 6.6313 5.2923 6.67415 5.00065 6.75M7.8756 3.25C7.8756 4.28553 7.0361 5.125 6.0006 5.125C4.96505 5.125 4.12559 4.28553 4.12559 3.25C4.12559 2.21447 4.96505 1.375 6.0006 1.375C7.0361 1.375 7.8756 2.21447 7.8756 3.25Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ProfileX12;

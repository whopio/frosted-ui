import * as React from 'react';
import { IconProps } from './types';

export const XCircleFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 10.0657C1 5.09511 5.02944 1.06567 10 1.06567C14.9706 1.06567 19 5.09511 19 10.0657C19 15.0362 14.9706 19.0657 10 19.0657C5.02944 19.0657 1 15.0362 1 10.0657ZM13.7805 6.21971C14.0734 6.5126 14.0734 6.98748 13.7805 7.28037L11.0609 9.99991L13.7807 12.7197C14.0736 13.0126 14.0736 13.4875 13.7807 13.7804C13.4879 14.0733 13.013 14.0733 12.7201 13.7804L10.0002 11.0606L7.28032 13.7804C6.98743 14.0733 6.51256 14.0733 6.21966 13.7804C5.92677 13.4875 5.92678 13.0126 6.21968 12.7197L8.93953 9.99991L6.21994 7.28037C5.92704 6.98748 5.92704 6.5126 6.21993 6.21971C6.51282 5.92681 6.98769 5.92681 7.28059 6.2197L10.0002 8.93926L12.7198 6.2197C13.0127 5.92681 13.4876 5.92681 13.7805 6.21971Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default XCircleFilled20;

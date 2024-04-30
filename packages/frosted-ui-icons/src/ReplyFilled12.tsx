import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.9997 2.18531C5.9997 1.64462 5.3597 1.35903 4.95728 1.72016L0.70658 5.5349C0.429837 5.78325 0.429838 6.21685 0.70658 6.4652L4.95728 10.2799C5.3597 10.6411 5.9997 10.3555 5.9997 9.81475V8.1275C7.87145 8.1525 8.8509 8.3684 9.4402 8.7015C10.0376 9.03915 10.276 9.5159 10.6524 10.2688L10.6643 10.2928C10.7421 10.4483 10.9166 10.53 11.0859 10.49C11.2552 10.4501 11.3747 10.299 11.3747 10.1251C11.3747 7.99235 11.0988 6.3975 10.1894 5.3482C9.321 4.34623 7.95315 3.92558 5.9997 3.87937V2.18531Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled12;

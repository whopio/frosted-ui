import * as React from 'react';
import { IconProps } from './types';

export const Globe16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 0.75C11.8555 0.75 15 3.89453 15 7.75C15 11.6328 11.8555 14.75 8 14.75C4.11719 14.75 1 11.6328 1 7.75C1 3.89453 4.11719 0.75 8 0.75ZM8 13.4375C8.19141 13.4375 8.71094 13.2461 9.28516 12.125C9.53125 11.6328 9.72266 11.0586 9.88672 10.375H6.08594C6.25 11.0586 6.44141 11.6328 6.6875 12.125C7.26172 13.2461 7.78125 13.4375 8 13.4375ZM5.86719 9.0625H10.1055C10.1602 8.65234 10.1875 8.21484 10.1875 7.75C10.1875 7.3125 10.1602 6.875 10.1055 6.4375H5.86719C5.8125 6.875 5.8125 7.3125 5.8125 7.75C5.8125 8.21484 5.8125 8.65234 5.86719 9.0625ZM9.88672 5.125C9.72266 4.46875 9.53125 3.89453 9.28516 3.40234C8.71094 2.28125 8.19141 2.0625 8 2.0625C7.78125 2.0625 7.26172 2.28125 6.6875 3.40234C6.44141 3.89453 6.25 4.46875 6.08594 5.125H9.88672ZM11.418 6.4375C11.4727 6.875 11.5 7.3125 11.5 7.75C11.5 8.21484 11.4727 8.65234 11.418 9.0625H13.5234C13.6328 8.65234 13.6875 8.21484 13.6875 7.75C13.6875 7.3125 13.6328 6.875 13.5234 6.4375H11.418ZM10.3516 2.58203C10.7344 3.29297 11.0352 4.16797 11.2266 5.125H13.0312C12.457 4.00391 11.5 3.10156 10.3516 2.58203ZM5.62109 2.58203C4.47266 3.10156 3.51562 4.00391 2.94141 5.125H4.74609C4.9375 4.16797 5.23828 3.29297 5.62109 2.58203ZM2.3125 7.75C2.3125 8.21484 2.33984 8.65234 2.44922 9.0625H4.55469C4.5 8.65234 4.5 8.21484 4.5 7.75C4.5 7.3125 4.5 6.875 4.55469 6.4375H2.44922C2.33984 6.875 2.3125 7.3125 2.3125 7.75ZM13.0312 10.375H11.2266C11.0352 11.3594 10.7344 12.2344 10.3516 12.9453C11.5 12.4258 12.457 11.5234 13.0312 10.375ZM4.74609 10.375H2.94141C3.51562 11.5234 4.47266 12.4258 5.62109 12.9453C5.23828 12.2344 4.9375 11.3594 4.74609 10.375Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Globe16;

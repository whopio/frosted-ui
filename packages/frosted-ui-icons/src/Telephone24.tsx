import * as React from 'react';
import { IconProps } from './types';

export const Telephone24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M13.25 1.75L13.25 2.5L13.25 1.75ZM14.7451 7.45097L14.8922 8.18641L14.7451 7.45097ZM11.147 8.17059L10.9999 7.43516C10.702 7.49475 10.4694 7.72821 10.411 8.02638L11.147 8.17059ZM10.75 12L11.5 12L10.75 12ZM11.147 15.8294L10.411 15.9736C10.4694 16.2718 10.702 16.5052 10.9999 16.5648L11.147 15.8294ZM14.7451 16.549L14.5981 17.2845L14.5981 17.2845L14.7451 16.549ZM13.25 22.25L13.25 23L13.25 22.25ZM11.25 22.25L11.25 21.5L11.25 22.25ZM10.9761 22.25L10.9761 23L10.9761 22.25ZM9.47425 21.4289L10.126 21.0578L10.126 21.0578L9.47425 21.4289ZM9.47426 2.57115L8.82247 2.2001L8.82247 2.2001L9.47426 2.57115ZM10.9761 1.75L10.9761 2.5L10.9761 1.75ZM11.25 1.75L11.25 1L11.25 1.75ZM14.5 1L13.25 1L13.25 2.5L14.5 2.5L14.5 1ZM16.5 3C16.5 1.89543 15.6046 1 14.5 1L14.5 2.5C14.7761 2.5 15 2.72386 15 3L16.5 3ZM16.5 6.22525L16.5 3L15 3L15 6.22524L16.5 6.22525ZM14.8922 8.18641C15.8271 7.99944 16.5 7.17861 16.5 6.22525L15 6.22524C15 6.46358 14.8318 6.66879 14.5981 6.71554L14.8922 8.18641ZM11.2941 8.90603L14.8922 8.18641L14.5981 6.71554L10.9999 7.43516L11.2941 8.90603ZM11.5 12C11.5 10.7464 11.6521 9.49313 11.883 8.31481L10.411 8.02638C10.1661 9.27638 10 10.6284 10 12L11.5 12ZM11.883 15.6852C11.6521 14.5069 11.5 13.2536 11.5 12L10 12C10 13.3716 10.1661 14.7236 10.411 15.9736L11.883 15.6852ZM14.8922 15.8136L11.2941 15.094L10.9999 16.5648L14.5981 17.2845L14.8922 15.8136ZM16.5 17.7748C16.5 16.8214 15.8271 16.0006 14.8922 15.8136L14.5981 17.2845C14.8318 17.3312 15 17.5364 15 17.7748L16.5 17.7748ZM16.5 21L16.5 17.7748L15 17.7748L15 21L16.5 21ZM14.5 23C15.6046 23 16.5 22.1046 16.5 21L15 21C15 21.2761 14.7761 21.5 14.5 21.5L14.5 23ZM13.25 23L14.5 23L14.5 21.5L13.25 21.5L13.25 23ZM11.25 23L13.25 23L13.25 21.5L11.25 21.5L11.25 23ZM10.9761 23L11.25 23L11.25 21.5L10.9761 21.5L10.9761 23ZM8.82247 21.7999C9.28169 22.6066 10.1361 23 10.9761 23L10.9761 21.5C10.5841 21.5 10.2763 21.3218 10.126 21.0578L8.82247 21.7999ZM6.50002 12C6.50002 16.9966 7.97209 20.3061 8.82247 21.7999L10.126 21.0578C9.37986 19.747 8.00002 16.6909 8.00002 12L6.50002 12ZM8.82247 2.2001C7.97209 3.69391 6.50002 7.0034 6.50002 12L8.00002 12C8.00002 7.30907 9.37987 4.25296 10.126 2.94219L8.82247 2.2001ZM10.9761 1C10.1361 1 9.28169 1.39341 8.82247 2.2001L10.126 2.94219C10.2763 2.67823 10.5841 2.5 10.9761 2.5L10.9761 1ZM11.25 1L10.9761 1L10.9761 2.5L11.25 2.5L11.25 1ZM13.25 1L11.25 1L11.25 2.5L13.25 2.5L13.25 1Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Telephone24;
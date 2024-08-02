import * as React from 'react';
import { IconProps } from './types';

export const MessageEdit24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="26"
        viewBox="0 0 24 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M12.75 4.0625H4.75C3.64543 4.0625 2.75 5.03255 2.75 6.22917V17.6042C2.75 18.8008 3.64543 19.7708 4.75 19.7708H8.65182C8.88675 19.7708 9.11418 19.8604 9.29422 20.0239L11.3593 21.8993C11.7292 22.2352 12.2679 22.2368 12.6397 21.9032L14.738 20.0199C14.9173 19.8589 15.143 19.7708 15.3759 19.7708H19.25C20.3546 19.7708 21.25 18.8008 21.25 17.6042V13.2708"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M19.0265 2.78789L16.3255 5.71392C15.8635 6.21448 15.5725 6.87049 15.5003 7.57406L15.4215 8.34243C15.3672 8.87192 15.7802 9.31932 16.2689 9.26049L16.9782 9.17511C17.6276 9.09694 18.2332 8.78164 18.6952 8.28108L21.3962 5.35505M19.0265 2.78789L19.9151 1.82521C20.5695 1.1163 21.6304 1.11631 22.2848 1.82521V1.82521C22.9392 2.53411 22.9392 3.68347 22.2848 4.39237L21.3962 5.35505M19.0265 2.78789L21.3962 5.35505"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M6.625 11.9167C6.625 12.4401 7.01675 12.8646 7.5 12.8646C7.98325 12.8646 8.375 12.4401 8.375 11.9167C8.375 11.3932 7.98325 10.9688 7.5 10.9688C7.01675 10.9688 6.625 11.3932 6.625 11.9167ZM11.125 11.9167C11.125 12.4401 11.5168 12.8646 12 12.8646C12.4832 12.8646 12.875 12.4401 12.875 11.9167C12.875 11.3932 12.4832 10.9688 12 10.9688C11.5168 10.9688 11.125 11.3932 11.125 11.9167ZM15.625 11.9167C15.625 12.4401 16.0168 12.8646 16.5 12.8646C16.9832 12.8646 17.375 12.4401 17.375 11.9167C17.375 11.3932 16.9832 10.9688 16.5 10.9688C16.0168 10.9688 15.625 11.3932 15.625 11.9167Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default MessageEdit24;

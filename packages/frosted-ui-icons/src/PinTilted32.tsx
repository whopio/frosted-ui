import * as React from 'react';
import { IconProps } from './types';

export const PinTilted32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PinTilted32"
      {...props}
    >
      <path
        d="M16.936 3.7c1.465-1.465 3.839-1.465 5.303 0l6.011 6.01c1.464 1.465 1.464 3.838 0 5.303l-5.335 5.336c-.251.251-.445.555-.567.889l-2.03 5.534c-.943 2.572-4.236 3.298-6.173 1.361l-4.633-4.635-4.596 4.597c-.293.293-.769.293-1.062 0-.292-.293-.292-.768 0-1.06l4.597-4.597-4.634-4.634c-1.936-1.937-1.21-5.23 1.36-6.173l5.535-2.028c.334-.123.638-.317.89-.569L16.935 3.7zm4.243 1.06c-.879-.878-2.303-.878-3.182 0l-5.335 5.335c-.405.405-.894.718-1.433.915l-5.535 2.03c-1.542.566-1.978 2.541-.816 3.704l10.329 10.329c1.162 1.16 3.137.725 3.703-.818l2.03-5.534c.197-.538.509-1.028.915-1.434l5.334-5.334c.879-.88.879-2.304 0-3.182l-6.01-6.01z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PinTilted32.category = 'Interface General';

export default PinTilted32;

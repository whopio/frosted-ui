import * as React from 'react';
import { IconProps } from './types';

export const MessagesBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessagesBoldFilled16"
      {...props}
    >
      <path
        d="M5.518 6.406c2.272.115 4.08 1.993 4.08 4.294l-.006.222c-.112 2.198-1.875 3.96-4.074 4.072L5.297 15c-.532 0-1.042-.1-1.513-.278-.632.145-1.255.314-1.547.397-.828.234-1.594-.531-1.36-1.36l.209-.776c.061-.24.125-.505.186-.772-.15-.397-.243-.823-.268-1.265L.997 10.7c0-2.375 1.925-4.3 4.3-4.3l.221.006zM9.8 1C12.67 1 15 3.328 15 6.2c0 .672-.13 1.317-.364 1.91.198.872.437 1.744.54 2.106v.001c.236.839-.542 1.59-1.36 1.358-.363-.103-1.234-.343-2.105-.541-.141.056-.286.105-.433.15.013-.16.022-.321.022-.484 0-3.314-2.687-6-6-6-.164 0-.326.008-.487.021.613-2.07 2.479-3.6 4.72-3.715L9.8 1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MessagesBoldFilled16.category = 'Communication';

export default MessagesBoldFilled16;

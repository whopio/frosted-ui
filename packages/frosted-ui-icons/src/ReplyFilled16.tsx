import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.99964 2.91377C7.99964 2.19285 7.14631 1.81206 6.60975 2.29356L0.942147 7.37989C0.573157 7.71102 0.573159 8.28915 0.942147 8.62029L6.60975 13.7066C7.14631 14.1881 7.99964 13.8073 7.99964 13.0864V10.8367C10.4953 10.87 11.8012 11.1579 12.587 11.602C13.3835 12.0522 13.7013 12.6879 14.2032 13.6918L14.2191 13.7237C14.3228 13.9311 14.5555 14.04 14.7812 13.9867C15.0069 13.9334 15.1663 13.732 15.1663 13.5001C15.1663 10.6565 14.7984 8.53002 13.5858 7.13095C12.428 5.79499 10.6042 5.23413 7.99964 5.17251V2.91377Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled16;

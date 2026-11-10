import * as React from 'react';
import { IconProps } from './types';

export const MailboxBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailboxBold20"
      {...props}
    >
      <path
        d="M14 6c2.761 0 5 2.24 5 5v5.75c0 1.243-1.008 2.25-2.25 2.25H3.25C2.007 19 1 17.993 1 16.75V11c0-2.588 1.967-4.717 4.487-4.974C5.56 6.01 5.634 6 5.71 6h5.19V2c0-.312.146-.606.395-.795.249-.19.572-.252.873-.168l3.6 1c.432.12.732.514.732.963 0 .449-.3.843-.732.963L12.9 4.76V6H14zM6 8c-1.657 0-3 1.344-3 3v5.75c0 .138.112.25.25.25h2.657v-.003H9V11c0-1.657-1.343-3-3-3zm4.001 0c.627.836.999 1.875.999 3v6h5.75c.138 0 .25-.112.25-.25V11c0-1.656-1.343-3-3-3h-3.999zM7 13.948c.552 0 1 .447 1 1 0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1 0-.553.448-1 1-1h2z"
        fill={color}
      />
    </svg>
  );
};

MailboxBold20.category = 'Interface General';

export default MailboxBold20;

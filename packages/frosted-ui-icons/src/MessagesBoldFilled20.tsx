import * as React from 'react';
import { IconProps } from './types';

export const MessagesBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessagesBoldFilled20"
      {...props}
    >
      <path
        d="M6.398 8.2c2.983 0 5.4 2.418 5.4 5.4S9.38 19 6.398 19c-.703 0-1.377-.137-1.996-.383-.806.182-1.616.398-2.06.522-.903.253-1.737-.58-1.484-1.483l.276-1.032c.082-.324.167-.678.247-1.031-.246-.617-.383-1.29-.383-1.993 0-2.982 2.418-5.4 5.4-5.4zM12.4 1C16.045 1 19 3.955 19 7.6l-.01.378c-.043.755-.213 1.477-.49 2.146.091.407.189.817.285 1.2l.333 1.259c.29 1.053-.681 2.024-1.734 1.734-.612-.168-1.542-.413-2.46-.619-.333.138-.68.248-1.04.331.009-.142.014-.285.014-.429 0-4.142-3.357-7.5-7.5-7.5-.143 0-.286.005-.427.013C6.646 3.184 9.267 1 12.4 1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MessagesBoldFilled20.category = 'Communication';

export default MessagesBoldFilled20;

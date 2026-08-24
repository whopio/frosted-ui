import * as React from 'react';
import { IconProps } from './types';

export const ReplyBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReplyBoldFilled16"
      {...props}
    >
      <path
        d="M9 12.836c0 1.118-1.32 1.715-2.16.976L1.517 9.126c-.679-.597-.679-1.655 0-2.252L6.84 2.187l.08-.065c.84-.636 2.08-.042 2.08 1.042v1.874c2.319.184 3.885 1.03 4.834 2.447C14.849 9.002 15 10.97 15 12.762c0 .416-.258.79-.648.936-.39.147-.83.035-1.105-.278-.98-1.12-1.766-1.694-2.52-2.009-.52-.216-1.067-.327-1.727-.377v1.802z"
        fill={color}
      />
    </svg>
  );
};

ReplyBoldFilled16.category = 'Arrows';

export default ReplyBoldFilled16;

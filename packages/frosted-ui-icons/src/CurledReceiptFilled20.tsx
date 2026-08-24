import * as React from 'react';
import { IconProps } from './types';

export const CurledReceiptFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CurledReceiptFilled20"
      {...props}
    >
      <path
        d="M16.75 0C18.545 0 20 1.455 20 3.25v4.5c0 1.519-1.231 2.75-2.75 2.75H15v6.776c0 2.21-2.508 3.483-4.292 2.181l-.354-.259c-.254-.185-.597-.193-.859-.018l-.608.405c-.84.56-1.934.56-2.774 0l-.608-.405c-.262-.175-.605-.167-.859.018l-.354.259C2.508 20.759 0 19.485 0 17.277V3.75C0 1.679 1.679 0 3.75 0h13zm-12 13.5c-.414 0-.75.336-.75.75s.336.75.75.75h2.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-2.5zm0-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h5.5c.414 0 .75-.336.75-.75S10.664 9 10.25 9h-5.5zm12-7.5c-.966 0-1.75.784-1.75 1.75V9h2.25c.69 0 1.25-.56 1.25-1.25v-4.5c0-.967-.784-1.75-1.75-1.75zm-12 3c-.414 0-.75.336-.75.75s.336.75.75.75h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5z"
        fill={color}
      />
    </svg>
  );
};

CurledReceiptFilled20.category = 'Money & Shopping';

export default CurledReceiptFilled20;

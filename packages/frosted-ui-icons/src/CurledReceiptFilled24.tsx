import * as React from 'react';
import { IconProps } from './types';

export const CurledReceiptFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CurledReceiptFilled24"
      {...props}
    >
      <path
        d="M20.183.001L20.25 0C22.321 0 24 1.679 24 3.75V9c0 1.933-1.567 3.5-3.5 3.5H18v8.918c0 1.923-2.035 3.165-3.745 2.286l-1.817-.934c-.24-.123-.53-.108-.756.041l-1.026.68c-1.004.664-2.308.664-3.312 0l-1.026-.68c-.226-.15-.515-.165-.756-.04l-1.817.933C2.035 24.584 0 23.341 0 21.418V4.5C0 2.015 2.015 0 4.5 0h15.65l.033.001zM4.75 16.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5zm0-5.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-8.5zm15.5-9.5C19.007 1.5 18 2.507 18 3.75V11h2.5c1.105 0 2-.896 2-2V3.75c0-1.243-1.007-2.25-2.25-2.25zm-15.5 4c-.414 0-.75.336-.75.75s.336.75.75.75h5.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-5.5z"
        fill={color}
      />
    </svg>
  );
};

CurledReceiptFilled24.category = 'Money & Shopping';

export default CurledReceiptFilled24;

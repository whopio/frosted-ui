import * as React from 'react';
import { IconProps } from './types';

export const CopyBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CopyBold16"
      {...props}
    >
      <path
        d="M12.3 5C13.79 5 15 6.209 15 7.7v4.6c0 1.491-1.209 2.7-2.7 2.7H7.7C6.21 15 5 13.791 5 12.3V7.7C5 6.21 6.209 5 7.7 5h4.6zM7.7 7c-.386 0-.7.314-.7.7v4.6c0 .386.314.7.7.7h4.6c.386 0 .7-.314.7-.7V7.7c0-.386-.314-.7-.7-.7H7.7zM10 1c.552 0 1 .448 1 1s-.448 1-1 1H3.7c-.386 0-.7.314-.7.7V10c0 .552-.448 1-1 1s-1-.448-1-1V3.7C1 2.21 2.209 1 3.7 1H10z"
        fill={color}
      />
    </svg>
  );
};

CopyBold16.category = 'Interface General';

export default CopyBold16;

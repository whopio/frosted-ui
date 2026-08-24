import * as React from 'react';
import { IconProps } from './types';

export const ClipboardBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ClipboardBoldFilled24"
      {...props}
    >
      <path
        d="M13.65 0c.838 0 1.627.374 2.16 1.012l.103.13.207.27c.03.037.059.064.081.088h.548c1.082 0 2.003.69 2.35 1.654C20.775 3.632 22 5.172 22 7v13c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V7c0-1.827 1.226-3.368 2.9-3.846C5.246 2.19 6.168 1.5 7.25 1.5H7.8c.022-.024.05-.051.08-.087.063-.077.127-.163.207-.27C8.617.423 9.458 0 10.35 0h3.3zm-5.9 17.5c-.552 0-1 .448-1 1s.448 1 1 1h5.5c.552 0 1-.448 1-1s-.448-1-1-1h-5.5zm0-5c-.552 0-1 .448-1 1s.448 1 1 1h8.5c.552 0 1-.448 1-1s-.448-1-1-1h-8.5zm0-5c-.552 0-1 .448-1 1s.448 1 1 1h8.5c.552 0 1-.448 1-1s-.448-1-1-1h-8.5zM10.442 3c-.155.21-.396.526-.696.795-.343.309-.924.705-1.717.705h7.943c-.792 0-1.373-.396-1.717-.704-.3-.27-.542-.586-.697-.796h-3.116z"
        fill={color}
      />
    </svg>
  );
};

ClipboardBoldFilled24.category = 'Interface General';

export default ClipboardBoldFilled24;

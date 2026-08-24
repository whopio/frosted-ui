import * as React from 'react';
import { IconProps } from './types';

export const Mailbox12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Mailbox12"
      {...props}
    >
      <path
        d="M6.66.144c.193-.141.443-.18.671-.107l2 .65c.312.1.522.393.519.721-.004.328-.22.616-.535.71l-1.465.44V3h.9C10.545 3 12 4.455 12 6.25V9.5c0 .828-.672 1.5-1.5 1.5h-9C.672 11 0 10.328 0 9.5V6c0-1.657 1.343-3 3-3h3.35V.75c0-.24.115-.465.31-.606zM3 4.5c-.828 0-1.5.672-1.5 1.5v3.5h3V6c0-.828-.672-1.5-1.5-1.5zm2.595 0C5.85 4.942 6 5.453 6 6v3.5h4.5V6.25c0-.967-.784-1.75-1.75-1.75H5.595zm-2.345 3c.414 0 .75.336.75.75S3.664 9 3.25 9h-.5C2.336 9 2 8.664 2 8.25s.336-.75.75-.75h.5z"
        fill={color}
      />
    </svg>
  );
};

Mailbox12.category = 'Interface General';

export default Mailbox12;

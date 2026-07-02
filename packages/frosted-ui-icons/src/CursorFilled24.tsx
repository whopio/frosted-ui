import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M23.0005 20.6594C23.0003 21.952 21.9522 23 20.6596 23.0002C20.039 23.0002 19.4434 22.7535 19.0044 22.3147L14.3755 17.6858C14.2604 17.5709 14.0685 17.5952 13.9848 17.7346L11.3852 22.0666C10.5599 23.4417 8.5124 23.2586 7.94382 21.759L1.16159 3.86936C0.520312 2.17703 2.17728 0.520067 3.8696 1.16135L21.7592 7.94358C23.2588 8.51217 23.4419 10.5597 22.0669 11.385L17.7348 13.9846C17.5954 14.0682 17.5712 14.2602 17.686 14.3752L22.3149 19.0041C22.7537 19.4431 23.0005 20.0387 23.0005 20.6594Z"
        fill={color}
      />
    </svg>
  );
};

CursorFilled24.category = 'Arrows';

export default CursorFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const LockOpenBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 1C9.39857 1 10.6631 1.57436 11.5703 2.5C12.1709 3.11316 11.6212 4 10.7627 4C10.4245 3.9999 10.1099 3.84538 9.84375 3.63672C9.33542 3.23828 8.6961 3 8 3C6.34315 3 5 4.34315 5 6V6.25H11.2998C13.0671 6.25 14.5 7.68288 14.5 9.4502V11.7998C14.5 13.5671 13.0671 15 11.2998 15H4.7002C2.93288 15 1.5 13.5671 1.5 11.7998V9.4502C1.5 8.2971 2.11151 7.28885 3.02637 6.72559C3.00962 6.65303 3 6.57764 3 6.5V6C3 3.23858 5.23858 1 8 1ZM4.7002 8.25C4.03745 8.25 3.5 8.78745 3.5 9.4502V11.7998C3.5 12.4625 4.03745 13 4.7002 13H11.2998C11.9625 13 12.5 12.4625 12.5 11.7998V9.4502C12.5 8.78745 11.9625 8.25 11.2998 8.25H4.7002Z"
        fill={color}
      />
    </svg>
  );
};

LockOpenBold16.category = 'Security';

export default LockOpenBold16;

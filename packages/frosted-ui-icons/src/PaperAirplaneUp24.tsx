import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUp24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUp24"
      {...props}
    >
      <path
        d="M9.45 2.548c1.071-2.069 4.031-2.069 5.101 0l8.062 15.591c1.472 2.848-1.55 5.92-4.421 4.494l-5.676-2.818c-.323-.16-.703-.16-1.026 0l-5.684 2.82c-2.871 1.425-5.893-1.647-4.42-4.494L9.45 2.548zm3.768.689c-.511-.988-1.924-.988-2.435 0L2.718 18.83c-.806 1.56.848 3.242 2.421 2.462l5.684-2.82c.138-.07.281-.125.427-.168v-5.553c0-.415.335-.75.75-.75.414 0 .75.335.75.75v5.55c.148.044.293.1.433.17l5.676 2.819c1.572.78 3.228-.902 2.422-2.461L13.218 3.237z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUp24.category = 'Communication';

export default PaperAirplaneUp24;

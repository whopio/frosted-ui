import * as React from 'react';
import { IconProps } from './types';

export const ScanCodeBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ScanCodeBoldFilled24"
      {...props}
    >
      <path
        d="M2 14.25c.552 0 1 .448 1 1V17c0 2.21 1.79 4 4 4h1.75c.552 0 1 .448 1 1s-.448 1-1 1H7c-3.314 0-6-2.686-6-6v-1.75c0-.552.448-1 1-1zm20 0c.552 0 1 .448 1 1V17c0 3.314-2.686 6-6 6h-1.75c-.552 0-1-.448-1-1s.448-1 1-1H17c2.21 0 4-1.79 4-4v-1.75c0-.552.448-1 1-1zM9 12.5c1.38 0 2.5 1.12 2.5 2.5v2c0 1.38-1.12 2.5-2.5 2.5H7c-1.38 0-2.5-1.12-2.5-2.5v-2c0-1.38 1.12-2.5 2.5-2.5h2zm8 0c1.38 0 2.5 1.12 2.5 2.5v2c0 1.38-1.12 2.5-2.5 2.5h-2c-1.38 0-2.5-1.12-2.5-2.5v-2c0-1.38 1.12-2.5 2.5-2.5h2zm-8-8c1.38 0 2.5 1.12 2.5 2.5v2c0 1.38-1.12 2.5-2.5 2.5H7c-1.38 0-2.5-1.12-2.5-2.5V7c0-1.38 1.12-2.5 2.5-2.5h2zm8 0c1.38 0 2.5 1.12 2.5 2.5v2c0 1.38-1.12 2.5-2.5 2.5h-2c-1.38 0-2.5-1.12-2.5-2.5V7c0-1.38 1.12-2.5 2.5-2.5h2zM8.75 1c.552 0 1 .448 1 1s-.448 1-1 1H7C4.79 3 3 4.79 3 7v1.75c0 .552-.448 1-1 1s-1-.448-1-1V7c0-3.314 2.686-6 6-6h1.75zM17 1c3.314 0 6 2.686 6 6v1.75c0 .552-.448 1-1 1s-1-.448-1-1V7c0-2.21-1.79-4-4-4h-1.75c-.552 0-1-.448-1-1s.448-1 1-1H17z"
        fill={color}
      />
    </svg>
  );
};

ScanCodeBoldFilled24.category = 'Communication';

export default ScanCodeBoldFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDown24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDown24"
      {...props}
    >
      <path
        d="M9.452 21.443c1.07 2.07 4.03 2.07 5.1 0l8.062-15.59c1.471-2.848-1.55-5.92-4.421-4.495l-5.676 2.818c-.323.16-.703.16-1.026 0l-5.684-2.82C2.936-.069-.086 3.003 1.387 5.85l8.065 15.593zm3.767-.689c-.511.988-1.924.988-2.435 0L2.719 5.162c-.806-1.56.848-3.243 2.421-2.462l5.684 2.82c.138.069.28.125.425.168v5.554c0 .414.336.75.75.75.415 0 .75-.336.75-.75V5.69c.149-.043.294-.101.435-.17L18.86 2.7c1.572-.78 3.227.902 2.422 2.462l-8.063 15.591z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDown24.category = 'Communication';

export default PaperAirplaneDown24;

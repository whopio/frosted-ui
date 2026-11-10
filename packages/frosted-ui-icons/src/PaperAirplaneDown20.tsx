import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDown20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDown20"
      {...props}
    >
      <path
        d="M7.792 17.657c.927 1.79 3.487 1.79 4.414 0l6.462-12.483c1.26-2.433-1.306-5.069-3.772-3.876l-4.544 2.199c-.221.107-.48.107-.703 0l-4.547-2.2C2.635.105.07 2.74 1.33 5.173l6.462 12.484zm3.082-.69c-.367.71-1.383.71-1.75 0L2.662 4.482c-.596-1.152.618-2.4 1.786-1.835l4.548 2.2c.084.04.17.075.258.105V9.25c0 .414.336.75.75.75s.75-.336.75-.75v-4.3c.085-.03.17-.065.252-.105l4.543-2.197c1.168-.565 2.383.683 1.787 1.835l-6.462 12.482z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneDown20.category = 'Communication';

export default PaperAirplaneDown20;

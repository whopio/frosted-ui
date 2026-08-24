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
        d="M7.792 17.657c.927 1.79 3.487 1.79 4.414 0l6.462-12.482c1.26-2.433-1.305-5.07-3.772-3.876l-4.543 2.198c-.222.108-.481.107-.703 0L5.102 1.298C2.635.105.07 2.741 1.33 5.174l6.462 12.483zm3.082-.69c-.367.71-1.382.71-1.75 0L2.662 4.484c-.596-1.153.618-2.4 1.787-1.835l4.547 2.199c.085.04.17.075.258.105V9.25c0 .414.336.75.75.75s.75-.336.75-.75v-4.3c.086-.03.17-.063.252-.103L15.55 2.65c1.168-.566 2.383.682 1.787 1.835l-6.462 12.482z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDown20.category = 'Communication';

export default PaperAirplaneDown20;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpFilled20"
      {...props}
    >
      <path
        d="M7.793 2.344c.927-1.79 3.487-1.79 4.414 0l6.462 12.482c1.26 2.433-1.306 5.069-3.772 3.876l-4.143-2.005V10.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75v5.945l-4.151 2.008C2.636 19.896.072 17.26 1.33 14.827L7.793 2.344z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpFilled20.category = 'Communication';

export default PaperAirplaneUpFilled20;

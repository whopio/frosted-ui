import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightFilled12"
      {...props}
    >
      <path
        d="M9.212.27c1.552-.5 3.02.967 2.518 2.518l-2.483 7.685c-.624 1.929-3.326 2.002-4.053.11l-.752-1.96L7.23 5.833c.292-.292.293-.767 0-1.06-.293-.293-.768-.293-1.06 0L3.381 7.56l-1.966-.756c-1.892-.727-1.819-3.429.11-4.052L9.211.27z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightFilled12.category = 'Communication';

export default PaperAirplaneUpRightFilled12;

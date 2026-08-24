import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpFilled24"
      {...props}
    >
      <path
        d="M9.451 2.55c1.07-2.07 4.03-2.07 5.101 0l8.062 15.59c1.472 2.848-1.55 5.92-4.421 4.494l-5.443-2.703v-7.18c0-.415-.336-.75-.75-.75s-.75.335-.75.75v7.184l-5.443 2.701c-2.871 1.425-5.893-1.647-4.421-4.494L9.451 2.549z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpFilled24.category = 'Communication';

export default PaperAirplaneUpFilled24;

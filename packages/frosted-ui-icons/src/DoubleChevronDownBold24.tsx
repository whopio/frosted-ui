import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.2931 9.79296C21.6837 9.40261 22.3167 9.4025 22.7072 9.79296C23.0975 10.1834 23.0975 10.8165 22.7072 11.207L13.1291 20.7851C12.5046 21.4096 11.4918 21.4096 10.8674 20.7851L1.29314 11.2109C0.902614 10.8204 0.902613 10.1874 1.29314 9.79686C1.68366 9.40634 2.31668 9.40634 2.7072 9.79686L11.9982 19.0879L21.2931 9.79296ZM21.2931 3.04296C21.6837 2.65261 22.3167 2.6525 22.7072 3.04296C23.0975 3.43344 23.0975 4.06654 22.7072 4.45702L13.1291 14.0351C12.5046 14.6596 11.4918 14.6596 10.8674 14.0351L1.29314 4.46093C0.902614 4.0704 0.902613 3.43739 1.29314 3.04686C1.68366 2.65634 2.31668 2.65634 2.7072 3.04686L11.9982 12.3379L21.2931 3.04296Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBold24.category = 'Arrows';

export default DoubleChevronDownBold24;

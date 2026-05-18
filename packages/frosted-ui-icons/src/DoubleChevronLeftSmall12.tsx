import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.77845 3.92804C6.07111 3.63512 6.07126 3.1603 5.77845 2.86749C5.4856 2.57505 5.01068 2.57495 4.7179 2.86749L2.29505 5.29132C1.90464 5.68175 1.90482 6.31484 2.29505 6.70538L4.7179 9.12823C5.01079 9.42112 5.48555 9.42112 5.77845 9.12823C6.0712 8.83533 6.07129 8.36053 5.77845 8.06768L3.70911 5.99835L5.77845 3.92804ZM9.77845 3.92804C10.0711 3.63512 10.0713 3.1603 9.77845 2.86749C9.4856 2.57505 9.01068 2.57495 8.7179 2.86749L6.29505 5.29132C5.90464 5.68175 5.90482 6.31484 6.29505 6.70538L8.7179 9.12823C9.01079 9.42112 9.48555 9.42112 9.77845 9.12823C10.0712 8.83533 10.0713 8.36053 9.77845 8.06768L7.70911 5.99835L9.77845 3.92804Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmall12.category = 'Arrows';

export default DoubleChevronLeftSmall12;

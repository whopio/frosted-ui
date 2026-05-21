import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.1062 9.69263C13.6918 9.10696 14.6414 9.10713 15.2273 9.69263C15.8129 10.2783 15.8128 11.2279 15.2273 11.8137L11.3562 15.6877C10.6076 16.4367 9.39283 16.4367 8.64426 15.6877L4.77317 11.8137C4.18769 11.2279 4.18757 10.2783 4.77317 9.69263C5.359 9.10711 6.3086 9.10701 6.89426 9.69263L9.99973 12.8L13.1062 9.69263ZM13.1062 4.1897C13.6918 3.60401 14.6414 3.60416 15.2273 4.1897C15.8129 4.77535 15.8128 5.72493 15.2273 6.31079L11.3562 10.1848C10.6076 10.9338 9.39284 10.9338 8.64426 10.1848L4.77317 6.31079C4.18764 5.72495 4.18754 4.77535 4.77317 4.1897C5.35901 3.60416 6.30861 3.60404 6.89426 4.1897L9.99973 7.29712L13.1062 4.1897Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallBoldFilled20.category = 'Arrows';

export default DoubleChevronDownSmallBoldFilled20;

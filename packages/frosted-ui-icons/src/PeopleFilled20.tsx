import * as React from 'react';
import { IconProps } from './types';

export const PeopleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PeopleFilled20"
      {...props}
    >
      <path
        d="M8.001 11.25c3.602 0 6.244 2.717 6.86 5.338.264 1.124-.7 1.912-1.61 1.912h-10.5c-.91 0-1.875-.788-1.61-1.912.616-2.62 3.258-5.338 6.86-5.338zm7.49 2.915c-.513-.9.14-2.03.951-1.387 1.293 1.023 2.18 2.43 2.504 3.81.264 1.124-.701 1.912-1.61 1.912-.598 0-.993-.691-.941-1.287.026-.309.006-.633-.073-.968v-.002l-.078-.3c-.17-.601-.424-1.201-.753-1.778zM8.001 2c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zm4.085 0c2.209 0 4 1.791 4 4s-1.791 4-4 4c-.115 0-.167-.141-.088-.225.931-.985 1.503-2.313 1.503-3.775 0-1.463-.572-2.791-1.503-3.776-.079-.084-.027-.224.088-.224z"
        fill={color}
      />
    </svg>
  );
};

PeopleFilled20.category = 'People';

export default PeopleFilled20;

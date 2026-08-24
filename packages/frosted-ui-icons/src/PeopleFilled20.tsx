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
        d="M8 11.25c3.602 0 6.244 2.717 6.86 5.338.265 1.124-.7 1.912-1.61 1.912H2.75c-.909 0-1.874-.788-1.61-1.912.617-2.62 3.259-5.338 6.86-5.338zm7.492 2.915c-.514-.9.138-2.028.95-1.387 1.292 1.023 2.179 2.43 2.504 3.81.264 1.124-.702 1.912-1.61 1.912-.598 0-.993-.692-.941-1.287.027-.309.005-.633-.073-.968v-.002l-.078-.3c-.17-.601-.423-1.202-.752-1.778zM8 2c2.21 0 4 1.79 4 4s-1.79 4-4 4c-2.208 0-4-1.791-4-4s1.792-4 4-4zm4.085 0c2.21 0 4 1.79 4 4s-1.79 4-4 4c-.114 0-.166-.141-.087-.225C12.93 8.79 13.5 7.462 13.5 6c0-1.463-.57-2.791-1.502-3.776-.079-.084-.027-.224.087-.224z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PeopleFilled20.category = 'People';

export default PeopleFilled20;

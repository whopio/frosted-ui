import * as React from 'react';
import { IconProps } from './types';

export const MoneyBagFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MoneyBagFilled16"
      {...props}
    >
      <path
        d="M12.317 5.5c.072 0 .142.026.196.074 1.62 1.439 2.53 3.414 2.455 5.3-.055 1.373-.639 2.684-1.832 3.638C11.954 15.456 10.24 16 8 16s-3.954-.544-5.136-1.488c-1.194-.954-1.777-2.265-1.832-3.638-.076-1.886.836-3.861 2.455-5.3.054-.048.123-.074.195-.074h8.635zM8 0c1.5 0 2.538.333 3.192.658.9.448.95 1.478.567 2.135l-.617 1.058c-.054.092-.152.149-.26.149H5.118c-.107 0-.205-.057-.26-.149l-.616-1.057c-.384-.657-.333-1.688.567-2.136l.264-.12C5.729.254 6.689 0 8 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MoneyBagFilled16.category = 'Money & Shopping';

export default MoneyBagFilled16;

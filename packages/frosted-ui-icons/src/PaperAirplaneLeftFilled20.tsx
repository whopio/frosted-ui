import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftFilled20"
      {...props}
    >
      <path
        d="M2.344 12.208c-1.79-.927-1.79-3.487 0-4.414l12.482-6.462c2.434-1.26 5.07 1.306 3.876 3.772l-2.005 4.142H10.75c-.414 0-.75.336-.75.75s.336.75.75.75h5.944l2.01 4.152c1.191 2.467-1.444 5.03-3.877 3.772L2.344 12.208z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneLeftFilled20.category = 'Communication';

export default PaperAirplaneLeftFilled20;

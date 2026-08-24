import * as React from 'react';
import { IconProps } from './types';

export const FountainPenFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FountainPenFilled20"
      {...props}
    >
      <path
        d="M15.543 11.34l-1.793 4.488c-.36.9-1.17 1.541-2.128 1.686l-9.517 1.443 5.56-5.56c.183.065.38.103.586.103.966 0 1.75-.784 1.75-1.75 0-.967-.784-1.75-1.75-1.75s-1.75.783-1.75 1.75c0 .206.038.403.103.586l-5.56 5.56 1.443-9.518c.146-.957.787-1.768 1.687-2.127l4.484-1.795 6.885 6.884zM10.68 1.907c.556-1.02 1.938-1.22 2.76-.398l5.051 5.053c.822.822.623 2.202-.397 2.759l-1.586.863-6.694-6.693.866-1.584z"
        fill={color}
      />
    </svg>
  );
};

FountainPenFilled20.category = 'Interface General';

export default FountainPenFilled20;

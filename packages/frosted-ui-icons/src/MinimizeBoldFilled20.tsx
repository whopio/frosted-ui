import * as React from 'react';
import { IconProps } from './types';

export const MinimizeBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.5 10C9.32843 10 10 10.6716 10 11.5V17.5C10 18.3284 9.32843 19 8.5 19C7.67168 18.9999 7 18.3283 7 17.5V15.1211L3.56055 18.5605C2.97475 19.1462 2.0252 19.1463 1.43945 18.5605C0.85383 17.9748 0.85383 17.0252 1.43945 16.4395L4.87891 13H2.5C1.67169 12.9999 1 12.3283 1 11.5C1 10.6717 1.67169 10.0001 2.5 10H8.5ZM16.4395 1.43945C17.0252 0.853707 17.9748 0.853789 18.5605 1.43945C19.1463 2.02524 19.1463 2.97476 18.5605 3.56055L15.1211 7H17.5C18.3284 7 19 7.67157 19 8.5C19 9.32843 18.3284 10 17.5 10H11.5C10.6717 9.99987 10 9.32835 10 8.5V2.5C10 1.67165 10.6717 1.00013 11.5 1C12.3284 1 13 1.67157 13 2.5V4.87891L16.4395 1.43945Z"
        fill={color}
      />
    </svg>
  );
};

MinimizeBoldFilled20.category = 'Arrows';

export default MinimizeBoldFilled20;

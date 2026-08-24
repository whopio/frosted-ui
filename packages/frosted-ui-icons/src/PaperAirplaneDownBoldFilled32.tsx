import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDownBoldFilled32"
      {...props}
    >
      <path
        d="M12.543 28.893c1.45 2.806 5.464 2.806 6.916 0L30.475 7.59c2-3.867-2.109-8.038-6.005-6.096L17 5.22v10.058c0 .552-.448 1-1 1-.553 0-1-.448-1-1V5.216L7.527 1.492C3.63-.448-.477 3.722 1.523 7.588l11.02 21.305z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBoldFilled32.category = 'Communication';

export default PaperAirplaneDownBoldFilled32;

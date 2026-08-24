import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDownBold32"
      {...props}
    >
      <path
        d="M12.544 28.893c1.451 2.806 5.465 2.806 6.916 0L30.476 7.59c2-3.867-2.109-8.038-6.005-6.096L16.716 5.36c-.448.224-.976.223-1.424 0L7.528 1.492C3.632-.45-.476 3.72 1.524 7.588l11.02 21.305zm5.138-.919c-.705 1.364-2.656 1.364-3.362 0L3.3 6.67C2.19 4.52 4.473 2.203 6.637 3.282L14.4 7.15c.194.097.394.175.599.234v7.894c0 .552.448 1 1 1s1-.448 1-1v-7.89c.208-.06.412-.14.61-.238l7.754-3.866c2.165-1.079 4.448 1.238 3.337 3.387L17.682 27.974z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBold32.category = 'Communication';

export default PaperAirplaneDownBold32;

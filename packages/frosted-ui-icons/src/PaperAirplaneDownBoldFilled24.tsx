import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDownBoldFilled24"
      {...props}
    >
      <path
        d="M9.23 21.315c1.165 2.248 4.38 2.247 5.544-.001l7.811-15.092c1.571-3.035-1.613-6.328-4.699-4.86l-4.885 2.324v7.555c0 .552-.447 1-1 1-.552 0-1-.448-1-1V3.683L6.116 1.36C3.03-.107-.154 3.187 1.416 6.22l7.815 15.094z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBoldFilled24.category = 'Communication';

export default PaperAirplaneDownBoldFilled24;

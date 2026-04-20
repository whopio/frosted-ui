import * as React from 'react';
import { IconProps } from './types';

export const StarFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.04395 0.762787C5.52924 0.0442121 6.65169 0.0957285 7.0459 0.917084L8.24023 3.40732L10.9922 3.76865C11.9566 3.89514 12.3493 5.08578 11.6377 5.7579L9.62793 7.65439L10.1328 10.3643C10.3119 11.3263 9.29459 12.0548 8.44238 11.5948L6.00098 10.2765L3.55957 11.5948C2.70742 12.0548 1.69002 11.3264 1.86914 10.3643L2.37305 7.65439L0.364258 5.7579C-0.347547 5.08578 0.0452775 3.89509 1.00977 3.76865L3.76074 3.40732L4.95605 0.917084L5.04395 0.762787Z"
        fill={color}
      />
    </svg>
  );
};

StarFilled12.category = 'Interface General';

export default StarFilled12;

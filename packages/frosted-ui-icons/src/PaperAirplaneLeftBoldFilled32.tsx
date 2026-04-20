import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.10593 19.4556C0.300036 18.0042 0.299917 13.9907 3.10593 12.5396L24.4096 1.52298C28.2763 -0.476442 32.4467 3.63197 30.5053 7.52786L26.7798 15.0005H16.7212C16.1689 15.0005 15.7212 15.4482 15.7212 16.0005C15.7213 16.5526 16.169 17.0005 16.7212 17.0005H26.7846L30.5073 24.4712C32.4486 28.3674 28.2782 32.4751 24.4116 30.4751L3.10593 19.4556Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftBoldFilled32.category = 'Communication';

export default PaperAirplaneLeftBoldFilled32;

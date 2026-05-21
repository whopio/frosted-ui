import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.10441 19.455C0.298625 18.0036 0.298434 13.9902 3.10441 12.539L24.4081 1.52243C28.2749 -0.477123 32.4453 3.63138 30.5038 7.52731L26.6376 15.2822C26.4141 15.7305 26.4143 16.2586 26.6376 16.707L30.5058 24.4707C32.447 28.3669 28.2767 32.4745 24.4101 30.4746L3.10441 19.455ZM4.02336 14.3164C2.65908 15.022 2.65919 16.9729 4.02336 17.6787L25.329 28.6982C27.4774 29.8094 29.7945 27.5271 28.7157 25.3623L24.8476 17.5986C24.751 17.4047 24.6727 17.2044 24.6132 17H16.7196C16.1675 17 15.7198 16.5521 15.7196 16C15.7196 15.4477 16.1674 15 16.7196 15H24.6103C24.6702 14.792 24.7493 14.5877 24.8476 14.3906L28.7138 6.63571C29.7926 4.47109 27.4755 2.18791 25.3271 3.29879L4.02336 14.3164Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftBold32.category = 'Communication';

export default PaperAirplaneLeftBold32;

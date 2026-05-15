import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.6597 1.50408C17.0552 0.744042 19.3114 3.00044 18.5516 5.39593L14.6832 17.5908C13.7908 20.4033 9.84438 20.4963 8.82056 17.7289L7.15637 13.2307C7.09984 13.0783 6.97946 12.9578 6.82699 12.9013L2.32539 11.2351C-0.441494 10.2108 -0.348117 6.26543 2.46419 5.37314L14.6597 1.50408ZM16.6457 4.79102C16.915 3.94112 16.1145 3.14029 15.2646 3.40995L3.06841 7.2797C2.07078 7.59636 2.03798 8.99532 3.01938 9.3589L7.52166 11.0258C7.54584 11.0348 7.56966 11.0452 7.59348 11.0549L10.5055 8.14287C10.896 7.75238 11.5291 7.75244 11.9197 8.14287C12.3102 8.53339 12.3102 9.16656 11.9197 9.55708L9.00631 12.4704C9.01517 12.4925 9.02429 12.5144 9.03255 12.5367L10.6967 17.0349C11.06 18.0167 12.4593 17.9837 12.7759 16.9858L16.6457 4.79102Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightBold20.category = 'Communication';

export default PaperAirplaneUpRightBold20;

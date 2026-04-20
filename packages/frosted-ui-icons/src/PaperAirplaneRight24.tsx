import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M21.4473 14.5439C23.5169 13.4735 23.517 10.5135 21.4473 9.44331L5.85647 1.38178C3.00924 -0.0900288 -0.0628548 2.93183 1.36233 5.80268L4.18069 11.4785C4.34118 11.8016 4.34109 12.1816 4.18069 12.5048L1.36038 18.1884C-0.0646839 21.0595 3.00745 24.0814 5.85452 22.6093L21.4473 14.5439ZM20.7588 10.7763C21.7467 11.2876 21.7468 12.7007 20.7588 13.2119L5.16604 21.2763C3.60658 22.0826 1.92355 20.4281 2.70413 18.8554L5.52444 13.1718C5.59297 13.0337 5.64933 12.8914 5.69241 12.746L11.2461 12.746C11.6603 12.746 11.9961 12.4102 11.9961 11.996C11.9961 11.5818 11.6603 11.246 11.2461 11.246L5.69534 11.246C5.65192 11.0977 5.59434 10.9522 5.52444 10.8115L2.70608 5.13569C1.92566 3.56338 3.60762 1.90818 5.16702 2.71381L20.7588 10.7763Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRight24.category = 'Communication';

export default PaperAirplaneRight24;

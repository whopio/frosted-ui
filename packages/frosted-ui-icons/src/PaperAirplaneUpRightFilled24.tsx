import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.8787 0.514093C22.0988 -0.192089 24.1917 1.90075 23.4853 4.12075L18.1613 20.8455C17.189 23.9001 12.8795 23.9356 11.8574 20.8973L9.91981 15.1368L14.9973 10.0593C15.2899 9.76643 15.2901 9.29147 14.9973 8.99868C14.7045 8.70617 14.2295 8.70619 13.9366 8.99868L8.85639 14.0789L3.09803 12.1406C0.0600935 11.1181 0.0954976 6.80887 3.14982 5.83673L19.8787 0.514093Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightFilled24.category = 'Communication';

export default PaperAirplaneUpRightFilled24;

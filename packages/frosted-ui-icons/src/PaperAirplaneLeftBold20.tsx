import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.47809 12.4292C0.509321 11.4087 0.509195 8.59215 2.47809 7.57176L14.4615 1.36083C17.0811 0.00341415 19.9371 2.72805 18.7046 5.40868L16.7007 9.7661C16.6328 9.91382 16.6329 10.0842 16.7007 10.2319L18.7056 14.5932C19.9381 17.2741 17.0821 19.9978 14.4625 18.6401L2.47809 12.4292ZM3.39801 9.34715C2.86902 9.62143 2.86932 10.3783 3.39801 10.6528L15.3834 16.8647C16.3128 17.3463 17.3254 16.3803 16.8882 15.4292L14.8834 11.0669C14.8727 11.0436 14.863 11.02 14.8531 10.9966H10.7339C10.1819 10.9964 9.73413 10.5486 9.73394 9.99657C9.73394 9.44439 10.1818 8.99675 10.7339 8.99657H14.855C14.8644 8.97459 14.8733 8.95194 14.8834 8.93016L16.8873 4.57274C17.3242 3.62176 16.3117 2.65579 15.3824 3.13719L3.39801 9.34715Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftBold20.category = 'Communication';

export default PaperAirplaneLeftBold20;

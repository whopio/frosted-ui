import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.5341 2.68471C11.9245 2.29424 11.9244 1.66119 11.5341 1.27065C11.1435 0.880232 10.5105 0.880161 10.12 1.27065L2.45888 8.93178C1.88141 9.50946 1.88135 10.4459 2.45888 11.0236L10.12 18.6847C10.5105 19.0751 11.1436 19.075 11.5341 18.6847C11.9245 18.2942 11.9245 17.6612 11.5341 17.2706L4.2411 9.97768L11.5341 2.68471ZM17.6806 2.68471C18.071 2.29424 18.0709 1.66119 17.6806 1.27065C17.29 0.880234 16.657 0.880161 16.2665 1.27065L8.60536 8.93178C8.02797 9.50946 8.02786 10.446 8.60536 11.0236L16.2665 18.6847C16.6569 19.0751 17.29 19.0749 17.6806 18.6847C18.071 18.2942 18.071 17.6612 17.6806 17.2706L10.3876 9.97768L17.6806 2.68471Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBold20.category = 'Arrows';

export default DoubleChevronLeftBold20;

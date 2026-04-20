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
        d="M11.5342 2.68468C11.9247 2.29421 11.9246 1.66116 11.5342 1.27062C11.1437 0.880201 10.5106 0.880131 10.1201 1.27062L2.459 8.93175C1.88153 9.50943 1.88147 10.4459 2.459 11.0235L10.1201 18.6847C10.5106 19.0751 11.1437 19.075 11.5342 18.6847C11.9246 18.2942 11.9246 17.6611 11.5342 17.2706L4.24123 9.97765L11.5342 2.68468ZM17.6807 2.68468C18.0712 2.29421 18.071 1.66116 17.6807 1.27062C17.2901 0.880203 16.6571 0.880131 16.2666 1.27062L8.60548 8.93175C8.02809 9.50943 8.02798 10.4459 8.60548 11.0235L16.2666 18.6847C16.6571 19.0751 17.2902 19.0749 17.6807 18.6847C18.0711 18.2942 18.0711 17.6611 17.6807 17.2706L10.3877 9.97765L17.6807 2.68468Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBold20.category = 'Arrows';

export default DoubleChevronLeftBold20;

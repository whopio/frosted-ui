import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.05774 5.6748C8.64346 5.08904 8.64343 4.13948 8.05774 3.55371C7.47194 2.96827 6.52232 2.96809 5.93665 3.55371L2.78918 6.70117C2.07352 7.41704 2.07362 8.57802 2.78918 9.29395L5.93665 12.4414C6.52237 13.0271 7.47194 13.027 8.05774 12.4414C8.64352 11.8556 8.64351 10.9061 8.05774 10.3203L5.73547 7.99805L8.05774 5.6748ZM13.3077 5.6748C13.8935 5.08904 13.8934 4.13948 13.3077 3.55371C12.7219 2.96827 11.7723 2.96809 11.1866 3.55371L8.03918 6.70117C7.32352 7.41704 7.32361 8.57802 8.03918 9.29395L11.1866 12.4414C11.7724 13.0271 12.7219 13.027 13.3077 12.4414C13.8935 11.8556 13.8935 10.9061 13.3077 10.3203L10.9855 7.99805L13.3077 5.6748Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeftSmallBoldFilled16.category = 'Arrows';

export default DoubleChevronLeftSmallBoldFilled16;

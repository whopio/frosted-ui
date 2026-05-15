import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.94177 5.67476C7.35606 5.08899 7.35608 4.13944 7.94177 3.55367C8.52757 2.96823 9.47719 2.96804 10.0629 3.55367L13.2103 6.70113C13.926 7.417 13.9259 8.57798 13.2103 9.2939L10.0629 12.4414C9.47714 13.0271 8.52758 13.027 7.94177 12.4414C7.35599 11.8556 7.356 10.9061 7.94177 10.3203L10.264 7.998L7.94177 5.67476ZM2.69177 5.67476C2.10606 5.08899 2.10608 4.13944 2.69177 3.55367C3.27757 2.96822 4.22719 2.96804 4.81287 3.55367L7.96033 6.70113C8.67599 7.417 8.6759 8.57798 7.96033 9.2939L4.81287 12.4414C4.22714 13.0271 3.27758 13.027 2.69177 12.4414C2.10599 11.8556 2.106 10.9061 2.69177 10.3203L5.01404 7.998L2.69177 5.67476Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallBoldFilled16.category = 'Arrows';

export default DoubleChevronRightSmallBoldFilled16;

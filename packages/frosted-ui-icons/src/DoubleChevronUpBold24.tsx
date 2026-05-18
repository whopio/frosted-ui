import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.2929 14.2106C21.6834 14.601 22.3165 14.6011 22.7069 14.2106C23.0971 13.8201 23.0972 13.187 22.7069 12.7965L13.1288 3.21843C12.5044 2.59401 11.4916 2.59407 10.8671 3.21843L1.29287 12.7926C0.902363 13.1832 0.902391 13.8162 1.29287 14.2067C1.6834 14.5972 2.31641 14.5972 2.70693 14.2067L11.9979 4.91569L21.2929 14.2106ZM21.2929 20.9606C21.6834 21.351 22.3165 21.3511 22.7069 20.9606C23.0971 20.5701 23.0972 19.937 22.7069 19.5466L13.1288 9.96842C12.5044 9.34401 11.4916 9.34407 10.8671 9.96842L1.29287 19.5426C0.902363 19.9332 0.90239 20.5662 1.29287 20.9567C1.6834 21.3472 2.31641 21.3472 2.70693 20.9567L11.9979 11.6657L21.2929 20.9606Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpBold24.category = 'Arrows';

export default DoubleChevronUpBold24;

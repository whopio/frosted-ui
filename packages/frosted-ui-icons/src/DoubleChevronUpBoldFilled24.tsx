import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.6896 14.3139C21.2754 14.8996 22.2249 14.8997 22.8107 14.3139C23.3962 13.7281 23.3963 12.7785 22.8107 12.1928L13.4825 2.86469C12.6627 2.04501 11.3335 2.04491 10.5138 2.86469L1.18958 12.1928C0.603992 12.7786 0.603933 13.7282 1.18958 14.3139C1.77538 14.8995 2.72498 14.8995 3.31067 14.3139L11.9982 5.62347L20.6896 14.3139ZM20.6896 21.3139C21.2754 21.8996 22.2249 21.8997 22.8107 21.3139C23.3961 20.7281 23.3963 19.7785 22.8107 19.1928L13.4825 9.86469C12.6628 9.04496 11.3335 9.04498 10.5138 9.86469L1.18958 19.1928C0.603964 19.7787 0.60385 20.7282 1.18958 21.3139C1.77538 21.8995 2.72498 21.8995 3.31067 21.3139L11.9982 12.6235L20.6896 21.3139Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronUpBoldFilled24.category = 'Arrows';

export default DoubleChevronUpBoldFilled24;

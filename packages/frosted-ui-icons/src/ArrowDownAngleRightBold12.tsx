import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.00018 1.25C0.448059 1.25019 0.000179291 1.69783 0.000179291 2.25V6.3125C0.000179291 7.38243 0.867792 8.24981 1.93768 8.25H8.62811L7.84686 9.05176C7.46164 9.44708 7.46945 10.0803 7.86444 10.4658C8.25975 10.8512 8.89292 10.8433 9.2785 10.4482L11.716 7.94824C12.0947 7.55987 12.0947 6.94013 11.716 6.55176L9.2785 4.05176C8.89292 3.65669 8.25975 3.64875 7.86444 4.03418C7.46945 4.4197 7.46164 5.05292 7.84686 5.44824L8.62811 6.25H2.00018V2.25C2.00018 1.69772 1.55246 1.25 1.00018 1.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRightBold12.category = 'Arrows';

export default ArrowDownAngleRightBold12;

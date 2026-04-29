import * as React from 'react';
import { IconProps } from './types';

export const ControlsBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.75 11C8.61384 11 10.18 12.2748 10.624 14H19C19.5521 14.0001 19.9999 14.4479 20 15C19.9999 15.5521 19.5521 15.9999 19 16H10.624C10.18 17.7252 8.61384 19 6.75 19C4.88616 19 3.32002 17.7252 2.87598 16H1C0.447839 16 0.000131853 15.5521 0 15C0.000131849 14.4479 0.447839 14 1 14H2.87598C3.32002 12.2748 4.88616 11 6.75 11ZM13.25 1C15.1138 1.00004 16.68 2.2748 17.124 4H19C19.5521 4.00018 19.9999 4.44794 20 5C19.9999 5.55206 19.5521 5.99982 19 6H17.124C16.68 7.7252 15.1138 8.99996 13.25 9C11.3862 9 9.82002 7.72522 9.37598 6H1C0.447797 6 0.000131951 5.55217 0 5C0.000131884 4.44783 0.447797 4 1 4H9.37598C9.82002 2.27478 11.3862 1 13.25 1Z"
        fill={color}
      />
    </svg>
  );
};

ControlsBoldFilled20.category = 'Interface General';

export default ControlsBoldFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.4598 9.79274C13.8502 9.40238 14.4833 9.40244 14.8738 9.79274C15.2642 10.1831 15.264 10.8162 14.8738 11.2068L11.0027 15.0808C10.4495 15.6345 9.55118 15.6344 8.99786 15.0808L5.12676 11.2068C4.73644 10.8162 4.73634 10.1832 5.12676 9.79274C5.51735 9.40251 6.15044 9.40235 6.54083 9.79274L9.99981 13.2537L13.4598 9.79274ZM13.4598 4.79274C13.8502 4.4024 14.4833 4.40244 14.8738 4.79274C15.2641 5.18313 15.264 5.81624 14.8738 6.2068L11.0027 10.0808C10.4495 10.6345 9.55118 10.6344 8.99786 10.0808L5.12676 6.2068C4.73644 5.81623 4.73634 5.18316 5.12676 4.79274C5.51735 4.40252 6.15044 4.40235 6.54083 4.79274L9.99981 8.25368L13.4598 4.79274Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallBold20.category = 'Arrows';

export default DoubleChevronDownSmallBold20;

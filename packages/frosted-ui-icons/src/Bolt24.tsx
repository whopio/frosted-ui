import * as React from 'react';
import { IconProps } from './types';

export const Bolt24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.4697 0.493408C12.0825 -0.378686 13.5 0.0396637 13.5 1.14673V8.50024H18.9268C19.9825 8.50065 20.6294 9.65856 20.0762 10.5579L12.166 23.4133C11.5477 24.4175 10.0004 23.9793 10 22.8V15.5002H5.0459C4.00356 15.5002 3.35415 14.3689 3.87988 13.469L11.4131 0.581299L11.4697 0.493408ZM5.30664 14.0002H10.1504C10.8957 14.0005 11.5 14.6054 11.5 15.3508V21.6331L18.6582 10.0002H13.3496C12.6044 10 12.0003 9.3958 12 8.65063V2.54907L5.30664 14.0002Z"
        fill={color}
      />
    </svg>
  );
};

export default Bolt24;

import * as React from 'react';
import { IconProps } from './types';

export const Star32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14.4108 2.58147L14.4108 2.58142C15.0503 1.25064 16.9497 1.25064 17.5892 2.58142L17.5892 2.58147L20.7471 9.15456L14.4108 2.58147ZM14.4108 2.58147L11.2527 9.15476C11.2152 9.23292 11.1395 9.28852 11.0502 9.30022C11.0502 9.30022 11.0502 9.30022 11.0502 9.30022L3.78406 10.2515C2.31707 10.4436 1.72052 12.2514 2.80291 13.2719L8.11498 18.2802C8.17924 18.3408 8.20727 18.4283 8.19152 18.5128L8.19152 18.5128L6.85744 25.6684L7.59473 25.8059L6.85744 25.6684C6.58514 27.129 8.13149 28.235 9.42778 27.5362L15.8739 24.0615C15.9524 24.0191 16.0474 24.0191 16.126 24.0614C16.126 24.0614 16.1261 24.0614 16.1261 24.0615L22.5722 27.5362L14.4108 2.58147ZM23.8085 18.5128L23.8085 18.5128L25.1425 25.6684C25.4148 27.1289 23.8686 28.235 22.5723 27.5362L23.8085 18.5128ZM23.8085 18.5128C23.7928 18.4284 23.8207 18.3409 23.8849 18.2802C23.8849 18.2802 23.885 18.2802 23.885 18.2801L29.197 13.2719C30.2795 12.2514 29.683 10.4436 28.2159 10.2515L20.9498 9.30022C20.9498 9.30022 20.9498 9.30022 20.9498 9.30022M23.8085 18.5128L20.9498 9.30022M20.9498 9.30022C20.8606 9.28854 20.785 9.23306 20.7472 9.15477L20.9498 9.30022Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Star32;

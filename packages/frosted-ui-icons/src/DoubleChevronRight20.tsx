import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.66655 2.28144C8.37378 1.98862 8.37389 1.51379 8.66655 1.2209C8.95934 0.928328 9.43424 0.927437 9.72709 1.21992L17.6392 9.13203C18.1191 9.61204 18.119 10.3903 17.6392 10.8703L9.72709 18.7814C9.43419 19.0743 8.95943 19.0743 8.66655 18.7814C8.37376 18.4885 8.37369 18.0137 8.66655 17.7209L16.3863 10.0012L8.66655 2.28144ZM2.22123 2.28144C1.92865 1.98861 1.92864 1.51373 2.22123 1.2209C2.51396 0.928276 2.98887 0.927582 3.28178 1.21992L11.1939 9.13203C11.6738 9.61207 11.6738 10.3903 11.1939 10.8703L3.28178 18.7814C2.98888 19.0743 2.51411 19.0743 2.22123 18.7814C1.92863 18.4885 1.92844 18.0137 2.22123 17.7209L9.94096 10.0012L2.22123 2.28144Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRight20.category = 'Arrows';

export default DoubleChevronRight20;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.1355 3.13542C14.6236 2.64726 14.6236 1.85597 14.1355 1.36784C13.6474 0.879904 12.856 0.879822 12.3679 1.36784L3.03981 10.696C2.31776 11.4181 2.31766 12.5891 3.03981 13.3112L12.3679 22.6354C12.8561 23.1234 13.6474 23.1234 14.1355 22.6354C14.6235 22.1472 14.6235 21.3559 14.1355 20.8678L5.26832 12.0036L14.1355 3.13542ZM21.1355 3.13542C21.6236 2.64726 21.6236 1.85597 21.1355 1.36784C20.6474 0.879999 19.856 0.879852 19.3679 1.36784L10.0398 10.696C9.31771 11.4181 9.31773 12.5891 10.0398 13.3112L19.3679 22.6354C19.8561 23.1234 20.6474 23.1235 21.1355 22.6354C21.6235 22.1472 21.6235 21.3559 21.1355 20.8678L12.2683 12.0036L21.1355 3.13542Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftFilled24.category = 'Arrows';

export default DoubleChevronLeftFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.1133 2.70767C11.7228 2.31717 11.7228 1.68316 12.1133 1.29263C12.5038 0.902414 13.1369 0.902414 13.5274 1.29263L26.9414 14.7067C27.6562 15.4215 27.6562 16.5808 26.9414 17.2956L13.5274 30.7096C13.1369 31.1 12.5038 31.1 12.1133 30.7096C11.7228 30.3191 11.7229 29.6861 12.1133 29.2956L25.4072 16.0016L12.1133 2.70767ZM4.8174 2.70767C4.4269 2.31717 4.42694 1.68316 4.8174 1.29263C5.20787 0.902414 5.841 0.902414 6.23146 1.29263L19.6455 14.7067C20.3602 15.4215 20.3603 16.5808 19.6455 17.2956L6.23146 30.7096C5.84098 31.1 5.20792 31.1 4.8174 30.7096C4.4269 30.3191 4.42694 29.6861 4.8174 29.2956L18.1113 16.0016L4.8174 2.70767Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBold32.category = 'Arrows';

export default DoubleChevronRightBold32;

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
        d="M12.1132 2.70767C11.7227 2.31717 11.7227 1.68316 12.1132 1.29263C12.5036 0.902414 13.1368 0.902414 13.5272 1.29263L26.9413 14.7067C27.656 15.4215 27.6561 16.5808 26.9413 17.2956L13.5272 30.7096C13.1367 31.1 12.5037 31.1 12.1132 30.7096C11.7227 30.3191 11.7227 29.6861 12.1132 29.2956L25.4071 16.0016L12.1132 2.70767ZM4.81728 2.70767C4.42677 2.31717 4.42681 1.68316 4.81728 1.29263C5.20774 0.902414 5.84087 0.902414 6.23134 1.29263L19.6454 14.7067C20.3601 15.4215 20.3602 16.5808 19.6454 17.2956L6.23134 30.7096C5.84086 31.1 5.20779 31.1 4.81728 30.7096C4.42677 30.3191 4.42681 29.6861 4.81728 29.2956L18.1112 16.0016L4.81728 2.70767Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBold32.category = 'Arrows';

export default DoubleChevronRightBold32;

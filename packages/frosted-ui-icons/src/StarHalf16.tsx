import * as React from 'react';
import { IconProps } from './types';

export const StarHalf16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StarHalf16"
      {...props}
    >
      <path
        d="M15.19 5.611c-.151-.466-.547-.795-1.033-.858l-3.501-.458-1.522-3.167C8.923.69 8.489.418 8 .418s-.922.271-1.133.71L5.347 4.295l-3.501.458c-.487.063-.883.392-1.034.858-.15.465-.021.962.334 1.297L3.704 9.32l-.643 3.446c-.09.48.1.954.495 1.242.22.162.479.242.739.242.204 0 .409-.05.598-.152L8 12.422l3.108 1.675c.429.232.943.197 1.337-.09.395-.287.584-.764.495-1.242l-.643-3.446 2.557-2.41c.356-.335.485-.834.335-1.298zm-4.021 2.711c-.312.295-.45.723-.37 1.14l.574 3.074-2.775-1.496c-.187-.101-.392-.151-.597-.151V2.232l1.36 2.832c.185.382.546.644.968.7l3.12.408-2.28 2.15z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

StarHalf16.category = 'Interface General';

export default StarHalf16;

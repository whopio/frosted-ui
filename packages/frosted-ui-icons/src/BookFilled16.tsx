import * as React from 'react';
import { IconProps } from './types';

export const BookFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BookFilled16"
      {...props}
    >
      <path
        d="M1.482 2.897c1.985-1.211 4.066-1.122 5.634-.15.085.053.135.147.135.248v11.614c0 .03-.037.044-.055.02-.905-1.227-2.837-2.043-4.716-1.02-.31.168-.685.16-.988-.019-.303-.18-.489-.508-.49-.86V3.75c0-.348.183-.672.48-.853zm7.269.096c0-.1.05-.195.135-.248 1.569-.97 3.65-1.06 5.634.152.297.181.478.505.478.853v8.98c0 .352-.185.68-.488.86-.303.18-.68.187-.99.018-1.877-1.021-3.81-.206-4.714 1.021-.018.024-.055.01-.055-.02V2.993z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BookFilled16.category = 'Communication';

export default BookFilled16;

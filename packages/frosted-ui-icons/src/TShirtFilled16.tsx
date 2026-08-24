import * as React from 'react';
import { IconProps } from './types';

export const TShirtFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TShirtFilled16"
      {...props}
    >
      <path
        d="M9.959 1.089c.214-.115.472-.119.69-.01l4.567 2.284c.602.302.857 1.027.577 1.639L14.74 7.294c-.259.564-.893.853-1.49.678L13 7.897v5.853c0 .69-.56 1.25-1.25 1.25h-7.5C3.56 15 3 14.44 3 13.75V7.897l-.251.075c-.596.175-1.23-.114-1.49-.678L.209 5.002c-.281-.613-.026-1.337.577-1.639L5.352 1.08l.083-.035c.198-.07.42-.056.607.045.214.114.359.326.39.566 0 .006.003.018.006.034.007.035.02.091.04.16.042.14.112.321.224.497C6.909 2.668 7.267 3 8 3c.733 0 1.092-.331 1.299-.654.112-.176.182-.357.223-.497.02-.069.033-.125.04-.16.004-.017.005-.029.006-.035l.001-.004c.032-.238.177-.447.39-.561z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

TShirtFilled16.category = 'Objects';

export default TShirtFilled16;

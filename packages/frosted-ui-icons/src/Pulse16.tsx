import * as React from 'react';
import { IconProps } from './types';

export const Pulse16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pulse16"
      {...props}
    >
      <path
        d="M14.445 3.995c.279-.306.753-.328 1.06-.05.306.279.328.753.05 1.06l-5.511 6.062c-.414.455-1.129.454-1.542 0L5.454 7.715l-3.9 4.29c-.278.306-.753.328-1.06.05-.305-.28-.327-.754-.049-1.06l4.238-4.662.081-.08c.393-.348.988-.348 1.38 0l.081.08 3.047 3.35 5.173-5.688z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Pulse16.category = 'Stats & Charts';

export default Pulse16;

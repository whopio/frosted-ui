import * as React from 'react';
import { IconProps } from './types';

export const CubeBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.5 1.44337C11.047 0.550208 12.953 0.550207 14.5 1.44337L19.8926 4.55665C21.4394 5.44985 22.3926 7.10049 22.3926 8.88673V15.1133C22.3925 16.8995 21.4394 18.5502 19.8926 19.4434L14.5 22.5567C12.953 23.4498 11.047 23.4498 9.5 22.5567L4.10742 19.4434C2.56055 18.5502 1.60745 16.8995 1.60742 15.1133V8.88673C1.60742 7.10049 2.56056 5.44985 4.10742 4.55665L9.5 1.44337ZM18.9932 8.00392C18.7192 7.5244 18.1084 7.35784 17.6289 7.63185L12 10.8477L6.37109 7.63185C5.89158 7.35784 5.28085 7.5244 5.00684 8.00392C4.73286 8.48343 4.8994 9.09417 5.37891 9.36818L11 12.5801V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V12.5801L18.6211 9.36818C19.1006 9.09417 19.2671 8.48343 18.9932 8.00392Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CubeBoldFilled24.category = 'Objects';

export default CubeBoldFilled24;

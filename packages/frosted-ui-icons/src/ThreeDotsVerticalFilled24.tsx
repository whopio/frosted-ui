import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.75 19.9644C9.75023 18.722 10.7577 17.7146 12 17.7144C13.2423 17.7146 14.2498 18.722 14.25 19.9644C14.2498 21.2067 13.2423 22.2141 12 22.2144C10.7577 22.2141 9.7502 21.2067 9.75 19.9644ZM9.75 11.9995C9.75033 10.7573 10.7578 9.74974 12 9.74951C13.2422 9.74974 14.2497 10.7573 14.25 11.9995C14.25 13.242 13.2424 14.2493 12 14.2495C10.7576 14.2493 9.75 13.242 9.75 11.9995ZM9.75 4.03564C9.75023 2.79334 10.7577 1.78588 12 1.78564C13.2423 1.78587 14.2498 2.79333 14.25 4.03564C14.2499 5.27803 13.2424 6.28542 12 6.28564C10.7576 6.28541 9.75013 5.27803 9.75 4.03564Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalFilled24.category = 'Interface General';

export default ThreeDotsVerticalFilled24;

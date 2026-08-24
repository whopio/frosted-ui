import * as React from 'react';
import { IconProps } from './types';

export const DiscountTagBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DiscountTagBoldFilled24"
      {...props}
    >
      <path
        d="M18.75 1C21.096 1 23 2.903 23 5.25v5.411c0 1.591-.632 3.117-1.757 4.242l-6.636 6.637c-1.952 1.953-5.119 1.952-7.071 0L2.46 16.465c-1.952-1.953-1.952-5.119 0-7.071l6.637-6.636C10.222 1.633 11.748 1 13.34 1h5.41zM12.5 5.5c-.553 0-1 .448-1 1v10c0 .552.447 1 1 1 .552 0 1-.448 1-1v-10c0-.552-.448-1-1-1zm-4 3.75c-1.243 0-2.25 1.008-2.25 2.25s1.007 2.25 2.25 2.25c1.242 0 2.25-1.007 2.25-2.25S9.741 9.25 8.5 9.25zm8 0c-1.243 0-2.25 1.008-2.25 2.25s1.007 2.25 2.25 2.25c1.242 0 2.25-1.007 2.25-2.25s-1.008-2.25-2.25-2.25zm-8 2c.138 0 .25.112.25.25s-.112.25-.25.25-.25-.112-.25-.25.112-.25.25-.25zm8 0c.138 0 .25.112.25.25s-.112.25-.25.25-.25-.112-.25-.25.112-.25.25-.25z"
        fill={color}
      />
    </svg>
  );
};

DiscountTagBoldFilled24.category = 'Money & Shopping';

export default DiscountTagBoldFilled24;

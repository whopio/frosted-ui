import * as React from 'react';
import { IconProps } from './types';

export const TimeSkipLeftBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TimeSkipLeftBoldFilled16"
      {...props}
    >
      <path
        d="M8 .5c3.03 0 5.636 1.796 6.82 4.374.437.953.68 2.013.68 3.126s-.243 2.173-.68 3.126C13.635 13.704 11.03 15.5 8 15.5c-3.03 0-5.636-1.796-6.82-4.374-.345-.753-.015-1.644.738-1.99.753-.345 1.644-.015 1.99.738C4.62 11.427 6.185 12.5 8 12.5c1.814 0 3.38-1.073 4.093-2.626.26-.569.407-1.202.407-1.874 0-.672-.146-1.305-.407-1.874C11.38 4.574 9.813 3.5 8 3.5c-.856 0-1.655.24-2.337.656.495.245.837.754.837 1.344C6.5 6.328 5.828 7 5 7H2C1.172 7 .5 6.328.5 5.5v-3C.5 1.672 1.172 1 2 1c.672 0 1.241.442 1.432 1.052C4.696 1.079 6.28.5 8 .5zm0 3.75c.69 0 1.25.56 1.25 1.25v2.393l.793.625c.542.427.636 1.213.209 1.755-.427.543-1.214.636-1.756.21l-1.27-1-.106-.095c-.235-.234-.37-.553-.37-.888v-3c0-.69.56-1.25 1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

TimeSkipLeftBoldFilled16.category = 'Arrows';

export default TimeSkipLeftBoldFilled16;

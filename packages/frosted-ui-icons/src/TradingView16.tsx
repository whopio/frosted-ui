import * as React from 'react';
import { IconProps } from './types';

export const TradingView16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TradingView16"
      {...props}
    >
      <path
        d="M6.521 11.55h-2.76V7.21H1v-2.76h5.521v7.098zm5.521 0H8.887l2.958-7.1H15l-2.958 7.1zM8.887 7.606c.872 0 1.578-.707 1.578-1.578 0-.871-.706-1.577-1.578-1.577-.87 0-1.577.706-1.577 1.577s.706 1.578 1.577 1.578z"
        fill={color}
      />
    </svg>
  );
};

TradingView16.category = 'Social & Brands';

export default TradingView16;

import * as React from 'react';
import { IconProps } from './types';

export const TradingView24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.88732 17.0705H5.94366V10.8733H2V6.92969H9.88732V17.0705zM17.7746 17.0705H13.2676L17.493 6.92969H22L17.7746 17.0705zM13.2676 11.4367C14.5122 11.4367 15.5211 10.4278 15.5211 9.18321 15.5211 7.93862 14.5122 6.92969 13.2676 6.92969 12.023 6.92969 11.0141 7.93862 11.0141 9.18321 11.0141 10.4278 12.023 11.4367 13.2676 11.4367z"
        fill={color}
      />
    </svg>
  );
};

TradingView24.category = 'Social & Brands';

export default TradingView24;

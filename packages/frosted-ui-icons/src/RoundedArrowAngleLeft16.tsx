import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeft16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.1242 14.9988C12.8173 14.9988 15.0009 12.8159 15.0011 10.1228C15.001 7.42962 12.8174 5.24585 10.1242 5.24585H3.56654L6.53041 2.28003C6.82301 1.9871 6.82317 1.51226 6.53041 1.21948C6.23751 0.926915 5.76264 0.926837 5.46986 1.21948L1.21986 5.47144C0.927297 5.76422 0.92743 6.23912 1.21986 6.53198L5.46986 10.7839C5.76267 11.0768 6.23745 11.0767 6.53041 10.7839C6.82299 10.4911 6.82308 10.0162 6.53041 9.72339L3.55482 6.74585H10.1242C11.9889 6.74585 13.501 8.25805 13.5011 10.1228C13.5009 11.9875 11.9889 13.4988 10.1242 13.4988H8.75307C8.33899 13.4988 8.00329 13.8348 8.00307 14.2488C8.00307 14.663 8.33885 14.9988 8.75307 14.9988H10.1242Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeft16.category = 'Arrows';

export default RoundedArrowAngleLeft16;

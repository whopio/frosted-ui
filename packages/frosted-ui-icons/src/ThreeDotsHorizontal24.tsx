import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontal24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.25 10.25C5.2165 10.25 6 11.0335 6 12C6 12.9665 5.2165 13.75 4.25 13.75C3.2835 13.75 2.5 12.9665 2.5 12C2.5 11.0335 3.2835 10.25 4.25 10.25ZM12 10.25C12.9665 10.25 13.75 11.0335 13.75 12C13.75 12.9665 12.9665 13.75 12 13.75C11.0335 13.75 10.25 12.9665 10.25 12C10.25 11.0335 11.0335 10.25 12 10.25ZM19.75 10.25C20.7165 10.25 21.5 11.0335 21.5 12C21.5 12.9665 20.7165 13.75 19.75 13.75C18.7835 13.75 18 12.9665 18 12C18 11.0335 18.7835 10.25 19.75 10.25Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontal24.category = 'Product Icons';

export default ThreeDotsHorizontal24;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.34316 12.2074C0.5535 11.2805 0.553665 8.72039 2.34316 7.79335L14.8256 1.33144C17.2591 0.0717525 19.8949 2.63721 18.7016 5.1039L16.6967 9.2455L10.7504 9.2455C10.3363 9.2455 10.0005 9.58142 10.0004 9.9955C10.0004 10.4097 10.3362 10.7455 10.7504 10.7455L16.6937 10.7455L18.7025 14.8978C19.8955 17.3645 17.2599 19.929 14.8266 18.6693L2.34316 12.2074Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftFilled20.category = 'Communication';

export default PaperAirplaneLeftFilled20;

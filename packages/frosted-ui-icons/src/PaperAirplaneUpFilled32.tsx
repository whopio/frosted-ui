import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.7649 2.97089C14.1227 0.343547 17.8801 0.343502 19.2375 2.97089L30.5032 24.7785C32.399 28.4492 28.4727 32.3938 24.7932 30.5148L16.844 26.4553C16.8135 26.4397 16.7814 26.428 16.7502 26.4143V16.7502C16.7502 16.3361 16.4144 16.0003 16.0002 16.0002C15.586 16.0002 15.2502 16.336 15.2502 16.7502V26.4172C15.2217 26.43 15.1923 26.441 15.1643 26.4553L7.20141 30.5187C3.52189 32.3959 -0.402437 28.4514 1.49341 24.7814L12.7649 2.97089Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpFilled32.category = 'Communication';

export default PaperAirplaneUpFilled32;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftFilled12"
      {...props}
    >
      <path
        d="M1.09 7.779c-1.452-.743-1.452-2.818 0-3.56L8.858.243c1.805-.923 3.768.937 2.944 2.789l-.987 2.215H6.75c-.414 0-.75.336-.75.75s.336.75.75.75h4.066l.989 2.22c.824 1.853-1.14 3.712-2.945 2.789L1.09 7.779z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneLeftFilled12.category = 'Communication';

export default PaperAirplaneLeftFilled12;

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
        d="M1.09 7.78c-1.452-.744-1.452-2.818 0-3.561L8.858.244c1.806-.923 3.768.937 2.944 2.79l-.987 2.214H6.75c-.414 0-.75.336-.75.75s.336.75.75.75h4.066l.989 2.221c.824 1.852-1.14 3.712-2.945 2.788L1.09 7.78z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftFilled12.category = 'Communication';

export default PaperAirplaneLeftFilled12;

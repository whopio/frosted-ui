import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeft12"
      {...props}
    >
      <path
        d="M1.09 7.78c-1.452-.744-1.452-2.818 0-3.561L8.858.244c1.806-.923 3.768.937 2.944 2.79L10.534 5.88c-.033.075-.033.16 0 .235l1.27 2.853c.823 1.852-1.14 3.712-2.945 2.788L1.09 7.78zm.683-2.225c-.363.186-.363.704 0 .89l7.77 3.976c.546.28 1.138-.283.89-.843l-1.26-2.83H6.749c-.414 0-.75-.336-.75-.75 0-.415.336-.75.75-.75h2.425l1.258-2.825c.249-.56-.344-1.122-.89-.843L1.773 5.555z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeft12.category = 'Communication';

export default PaperAirplaneLeft12;

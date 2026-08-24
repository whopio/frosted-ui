import * as React from 'react';
import { IconProps } from './types';

export const Coinbase12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Coinbase12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 1.5C3.515 1.5 1.5 3.515 1.5 6s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5S8.485 1.5 6 1.5zm0 1c1.23 0 2.31.635 2.934 1.59.066.103.127.209.183.318.189.369.043.82-.326 1.009-.369.188-.82.043-1.009-.326-.032-.063-.067-.123-.105-.182C7.319 4.36 6.7 4 6 4c-1.105 0-2 .895-2 2s.895 2 2 2c.701 0 1.319-.36 1.677-.91.038-.058.073-.118.105-.18.189-.37.64-.515 1.009-.327.369.189.515.64.326 1.009-.056.109-.117.215-.183.317C8.31 8.865 7.229 9.5 6 9.5 4.067 9.5 2.5 7.933 2.5 6S4.067 2.5 6 2.5z"
        fill={color}
      />
    </svg>
  );
};

Coinbase12.category = 'Interface General';

export default Coinbase12;

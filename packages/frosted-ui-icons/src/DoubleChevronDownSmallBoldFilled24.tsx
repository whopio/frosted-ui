import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.9417 11.4095C16.5286 10.8253 17.4782 10.8268 18.0628 11.4134C18.6472 12.0002 18.6453 12.9498 18.0589 13.5345L13.4114 18.1634C12.6311 18.9404 11.3695 18.9404 10.5891 18.1634L5.94168 13.5345C5.355 12.9498 5.35326 12.0002 5.93777 11.4134C6.52238 10.8269 7.47205 10.8251 8.05887 11.4095L12.0003 15.3343L15.9417 11.4095ZM15.9417 5.6829C16.5286 5.09836 17.4781 5.10003 18.0628 5.68681C18.6471 6.27373 18.6456 7.22336 18.0589 7.8079L13.4114 12.4368C12.6311 13.2137 11.3695 13.2136 10.5891 12.4368L5.94168 7.8079C5.3549 7.22329 5.35325 6.27372 5.93777 5.68681C6.52239 5.10003 7.47196 5.09836 8.05887 5.6829L12.0003 9.60771L15.9417 5.6829Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallBoldFilled24.category = 'Arrows';

export default DoubleChevronDownSmallBoldFilled24;

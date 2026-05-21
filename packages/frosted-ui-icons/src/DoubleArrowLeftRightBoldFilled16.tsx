import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowLeftRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.064 8.43742C11.4783 7.85172 10.5287 7.8519 9.94287 8.43742C9.37645 9.00386 9.35918 9.90906 9.88818 10.498H2.50342C1.675 10.498 1.00344 11.1696 1.00342 11.998C1.00342 12.8264 1.67499 13.498 2.50342 13.498H9.88818C9.35739 14.0868 9.37386 14.9934 9.94092 15.5605C10.5267 16.146 11.4763 16.1461 12.062 15.5605L14.564 13.0585C15.1494 12.4728 15.1494 11.5231 14.564 10.9374L12.064 8.43742ZM6.06396 0.439377C5.47822 -0.146334 4.52866 -0.146259 3.94287 0.439377L1.43896 2.94328C0.853189 3.52906 0.853207 4.47859 1.43896 5.06438L3.94287 7.56828C4.52868 8.15374 5.47828 8.15395 6.06396 7.56828C6.63128 7.00078 6.64772 6.0926 6.11572 5.50383H13.5034C14.3315 5.50357 15.0033 4.83199 15.0034 4.00383C15.0034 3.17556 14.3316 2.50409 13.5034 2.50383H6.11572C6.64782 1.91512 6.63118 1.00695 6.06396 0.439377Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowLeftRightBoldFilled16.category = 'Arrows';

export default DoubleArrowLeftRightBoldFilled16;

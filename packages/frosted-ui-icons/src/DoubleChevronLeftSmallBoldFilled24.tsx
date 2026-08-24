import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftSmallBoldFilled24"
      {...props}
    >
      <path
        d="M12.586 8.054c.584-.587.583-1.537-.004-2.121-.587-.585-1.536-.583-2.12.003l-4.63 4.648c-.777.78-.777 2.042 0 2.822l4.63 4.648c.584.586 1.533.588 2.12.004.587-.585.588-1.535.004-2.121l-3.925-3.942 3.925-3.941zm5.727 0c.584-.587.583-1.537-.004-2.121-.587-.585-1.537-.583-2.121.003l-4.63 4.648c-.776.78-.776 2.042 0 2.822l4.63 4.648c.584.587 1.534.588 2.12.004.588-.585.59-1.535.005-2.121l-3.925-3.942 3.925-3.941z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBoldFilled24.category = 'Arrows';

export default DoubleChevronLeftSmallBoldFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.36865 4.28159C5.88073 3.79341 5.88057 3.00209 6.36865 2.51401C6.85676 2.02635 7.6482 2.02622 8.13623 2.51401L10.5591 4.93686C11.1448 5.52254 11.1445 6.47312 10.5591 7.05893L8.13623 9.48178C7.64808 9.96994 6.85681 9.96994 6.36865 9.48178C5.88064 8.99361 5.88054 8.20231 6.36865 7.7142L8.08447 5.99838L6.36865 4.28159ZM1.36865 4.28159C0.880727 3.79341 0.880573 3.00209 1.36865 2.51401C1.85676 2.02635 2.6482 2.02622 3.13623 2.51401L5.55908 4.93686C6.14476 5.52254 6.14454 6.47312 5.55908 7.05893L3.13623 9.48178C2.64808 9.96994 1.85681 9.96994 1.36865 9.48178C0.880636 8.99361 0.880544 8.20231 1.36865 7.7142L3.08447 5.99838L1.36865 4.28159Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronRightSmallBoldFilled12.category = 'Arrows';

export default DoubleChevronRightSmallBoldFilled12;

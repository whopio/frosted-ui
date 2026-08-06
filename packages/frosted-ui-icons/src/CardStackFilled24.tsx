import * as React from 'react';
import { IconProps } from './types';

export const CardStackFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackFilled24"
      {...props}
    >
      <path
        d="M19.2487 8.5C21.5527 8.5 23.3116 10.5581 22.9528 12.834L21.8493 19.834C21.5618 21.657 19.9907 22.9999 18.1452 23H5.85028C4.00504 22.9996 2.43358 21.6568 2.14618 19.834L1.04266 12.834C0.683957 10.5584 2.44315 8.50038 4.74676 8.5H19.2487ZM18.235 4.5C19.8689 4.50023 21.1726 5.79981 21.2311 7.38477C20.6229 7.13716 19.9554 7.00005 19.2516 7H4.74969C4.0497 7.00005 3.38558 7.13575 2.77997 7.38086C2.84057 5.79753 4.14428 4.50003 5.77704 4.5H18.235ZM15.6042 1.00098C16.9247 1.00114 18.0258 1.84873 18.4343 3.00488C18.3689 3.00207 18.3031 3.00001 18.237 3H5.77899C5.71026 3 5.64184 3.00185 5.57391 3.00488C5.98198 1.84852 7.08322 1.00098 8.40399 1.00098H15.6042Z"
        fill={color}
      />
    </svg>
  );
};

CardStackFilled24.category = 'Interface General';

export default CardStackFilled24;

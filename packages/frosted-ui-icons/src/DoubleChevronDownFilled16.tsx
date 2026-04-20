import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.8705 7.86239C13.3608 7.37647 14.1521 7.37994 14.6381 7.8702C15.1237 8.3605 15.1204 9.15187 14.6303 9.63778L9.08728 15.1329C8.45482 15.7596 7.43397 15.7544 6.80701 15.1222L1.36267 9.62997C0.876725 9.13967 0.880224 8.34837 1.37049 7.86239C1.86079 7.37647 2.65209 7.37995 3.13806 7.8702L7.9574 12.7315L12.8705 7.86239ZM12.8676 1.36629C13.3557 0.878213 14.147 0.878242 14.6351 1.36629C15.123 1.85446 15.1231 2.64581 14.6351 3.13387L9.14002 8.62899C8.51031 9.25858 7.48949 9.25844 6.85974 8.62899L1.36658 3.13387C0.878558 2.64568 0.878492 1.85438 1.36658 1.36629C1.85477 0.878319 2.64609 0.878222 3.13416 1.36629L7.99939 6.23348L12.8676 1.36629Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownFilled16.category = 'Arrows';

export default DoubleChevronDownFilled16;

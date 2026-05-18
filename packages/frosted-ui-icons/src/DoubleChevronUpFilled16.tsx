import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.8705 8.73747C13.3608 9.22338 14.1521 9.21991 14.6381 8.72965C15.1237 8.23936 15.1204 7.44798 14.6303 6.96207L9.08728 1.46696C8.45482 0.840237 7.43397 0.845499 6.80701 1.4777L1.36267 6.96989C0.876725 7.46019 0.880224 8.25148 1.37049 8.73747C1.86079 9.22338 2.65209 9.2199 3.13806 8.72965L7.9574 3.86832L12.8705 8.73747ZM12.8676 15.2336C13.3557 15.7216 14.147 15.7216 14.6351 15.2336C15.123 14.7454 15.1231 13.954 14.6351 13.466L9.14002 7.97086C8.51031 7.34128 7.48949 7.34141 6.85974 7.97086L1.36658 13.466C0.878558 13.9542 0.878492 14.7455 1.36658 15.2336C1.85477 15.7215 2.64609 15.7216 3.13416 15.2336L7.99939 10.3664L12.8676 15.2336Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpFilled16.category = 'Arrows';

export default DoubleChevronUpFilled16;

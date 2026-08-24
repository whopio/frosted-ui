import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowDownUpBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowDownUpBoldFilled12"
      {...props}
    >
      <path
        d="M6.366 2.116c-.489.488-.488 1.28 0 1.768.374.374.926.46 1.383.26v6.606c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25V4.145c.458.2 1.01.113 1.384-.261.488-.488.488-1.28 0-1.768L9.883.366C9.65.132 9.331 0 9 0c-.331 0-.65.132-.883.366l-1.75 1.75zm-6 6c-.488.488-.488 1.28 0 1.768l1.75 1.75c.489.488 1.28.488 1.768 0l1.75-1.75c.488-.488.488-1.28 0-1.768-.374-.374-.926-.46-1.384-.261V1.25C4.25.56 3.69 0 3 0S1.75.56 1.75 1.25v6.605c-.457-.2-1.01-.113-1.383.261z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowDownUpBoldFilled12.category = 'Arrows';

export default DoubleArrowDownUpBoldFilled12;

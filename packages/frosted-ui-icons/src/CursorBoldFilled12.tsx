import * as React from 'react';
import { IconProps } from './types';

export const CursorBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.9784 10.8153C12.9784 12.01 12.01 12.9784 10.8153 12.9784H10.7224C10.1488 12.9783 9.59865 12.7503 9.19304 12.3447L7.58659 10.7382L7.04794 11.7923C6.15707 13.534 3.61094 13.3523 2.97636 11.5019L0.178538 3.33863C-0.492363 1.38118 1.38119 -0.49236 3.33863 0.178538L11.5019 2.97636C13.3523 3.61094 13.534 6.15707 11.7923 7.04794L10.7382 7.58659L12.3447 9.19304C12.7503 9.59865 12.9783 10.1488 12.9784 10.7224V10.8153Z"
        fill={color}
      />
    </svg>
  );
};

CursorBoldFilled12.category = 'Arrows';

export default CursorBoldFilled12;

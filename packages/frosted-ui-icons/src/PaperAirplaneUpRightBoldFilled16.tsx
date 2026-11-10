import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightBoldFilled16"
      {...props}
    >
      <path
        d="M10.964 1.714c2.031-.642 3.944 1.27 3.301 3.301l-2.854 9.02c-.747 2.356-4.037 2.479-4.956.184l-.937-2.34 3.573-3.572c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0l-3.572 3.571-2.347-.94c-2.295-.92-2.171-4.21.186-4.956l9.02-2.854z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpRightBoldFilled16.category = 'Communication';

export default PaperAirplaneUpRightBoldFilled16;

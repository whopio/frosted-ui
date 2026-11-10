import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpBoldFilled16"
      {...props}
    >
      <path
        d="M12.694 8.915c.588.583 1.538.578 2.12-.01.584-.588.58-1.538-.009-2.121L9.262 1.29c-.73-.724-1.91-.72-2.634.01L1.184 6.795c-.583.588-.578 1.538.01 2.12.588.584 1.538.58 2.12-.009l4.644-4.684 4.736 4.694zm-.004 6.495c.586.586 1.535.586 2.121 0 .586-.586.586-1.535 0-2.121L9.316 7.794c-.728-.727-1.907-.728-2.634 0L1.19 13.289c-.586.585-.585 1.535 0 2.12.586.586 1.535.587 2.121 0L8 10.72l4.69 4.69z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronUpBoldFilled16.category = 'Arrows';

export default DoubleChevronUpBoldFilled16;

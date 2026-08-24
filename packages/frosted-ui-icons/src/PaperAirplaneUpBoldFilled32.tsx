import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpBoldFilled32"
      {...props}
    >
      <path
        d="M12.544 3.105c1.451-2.806 5.465-2.806 6.916 0l11.016 21.303c2 3.867-2.109 8.038-6.005 6.096L17 26.778V16.72c0-.552-.448-1-1-1s-1 .448-1 1v10.063l-7.471 3.723c-3.896 1.941-8.004-2.23-6.004-6.096l11.02-21.305z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBoldFilled32.category = 'Communication';

export default PaperAirplaneUpBoldFilled32;

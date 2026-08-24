import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRightBoldFilled24"
      {...props}
    >
      <path
        d="M21.316 14.77c2.248-1.164 2.248-4.38 0-5.543L6.223 1.416C3.189-.155-.105 3.029 1.364 6.115L3.686 11h7.555c.552 0 1 .447 1 1 0 .552-.448 1-1 1H3.685L1.36 17.885c-1.467 3.086 1.827 6.27 4.862 4.7l15.093-7.815z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightBoldFilled24.category = 'Communication';

export default PaperAirplaneRightBoldFilled24;

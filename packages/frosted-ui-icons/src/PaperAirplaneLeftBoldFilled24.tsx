import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftBoldFilled24"
      {...props}
    >
      <path
        d="M2.688 14.77c-2.248-1.164-2.248-4.38 0-5.543L17.78 1.416c3.035-1.571 6.328 1.613 4.86 4.699L20.317 11h-7.554c-.553 0-1 .447-1 1 0 .552.447 1 1 1h7.557l2.324 4.885c1.467 3.087-1.827 6.27-4.862 4.7L2.688 14.77z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneLeftBoldFilled24.category = 'Communication';

export default PaperAirplaneLeftBoldFilled24;

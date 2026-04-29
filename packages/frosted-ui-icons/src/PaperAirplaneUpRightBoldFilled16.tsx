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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.9645 1.7141C12.9954 1.07188 14.9076 2.98405 14.2653 5.01485L11.4106 14.0346C10.6643 16.3914 7.37433 16.5138 6.45464 14.219L5.51827 11.8794L9.09041 8.30732C9.48093 7.91679 9.48093 7.28363 9.09041 6.8931C8.69986 6.50286 8.06662 6.50267 7.67619 6.8931L4.10544 10.4639L1.75832 9.52404C-0.536459 8.60397 -0.413101 5.31392 1.94407 4.56808L10.9645 1.7141Z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpRightBoldFilled16.category = 'Communication';

export default PaperAirplaneUpRightBoldFilled16;

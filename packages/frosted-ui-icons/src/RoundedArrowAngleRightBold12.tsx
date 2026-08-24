import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRightBold12"
      {...props}
    >
      <path
        d="M4.5 12C2.015 12 0 9.984 0 7.5 0 5.014 2.015 3 4.5 3h4.086L7.293 1.707c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0l3 3c.027.027.052.057.076.087.036.045.069.094.096.145.025.046.046.094.063.143l.015.04c.057.19.058.395 0 .585l-.015.04c-.027.075-.062.148-.107.217-.038.056-.08.109-.128.157l-3 3c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L8.586 5H4.5C3.12 5 2 6.119 2 7.5 2 8.88 3.12 10 4.5 10h.75c.552 0 1 .447 1 1 0 .552-.448 1-1 1H4.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRightBold12.category = 'Arrows';

export default RoundedArrowAngleRightBold12;

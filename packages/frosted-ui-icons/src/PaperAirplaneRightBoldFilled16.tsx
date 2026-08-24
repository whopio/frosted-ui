import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRightBoldFilled16"
      {...props}
    >
      <path
        d="M13.731 10.088c1.69-.877 1.69-3.295 0-4.172L4.856 1.31C2.662.17.25 2.409 1.222 4.683l.992 2.316h5.052c.552 0 1 .448 1 1s-.448 1-1 1h-5.05l-.995 2.324c-.972 2.274 1.441 4.513 3.635 3.373l8.875-4.608z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightBoldFilled16.category = 'Communication';

export default PaperAirplaneRightBoldFilled16;

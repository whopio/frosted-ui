import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReplyFilled24"
      {...props}
    >
      <path
        d="M12 19.858c0 1.09-1.297 1.657-2.098.918l-8.314-7.674c-.643-.594-.643-1.61 0-2.205l8.314-7.673.156-.125C10.86 2.558 12 3.12 12 4.141v3.37c4.58.14 7.39 1.571 9.022 3.857C22.699 13.718 23 16.806 23 19.75c0 .312-.194.592-.486.702-.293.11-.623.027-.828-.208-1.613-1.842-3.26-2.764-4.954-3.236-1.501-.419-3.059-.494-4.732-.506v3.356z"
        fill={color}
      />
    </svg>
  );
};

ReplyFilled24.category = 'Arrows';

export default ReplyFilled24;

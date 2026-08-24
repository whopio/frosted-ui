import * as React from 'react';
import { IconProps } from './types';

export const MessageReviewFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageReviewFilled24"
      {...props}
    >
      <path
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12c-1.235 0-2.43-.187-3.553-.534-1.328-.411-2.582-.642-3.725-.318-.593.169-1.158.346-1.675.518-.835.278-1.648-.035-2.163-.55-.515-.515-.828-1.328-.55-2.163.172-.518.35-1.084.518-1.679.323-1.143.093-2.396-.318-3.724C.187 14.427 0 13.235 0 12 0 5.373 5.373 0 12 0zm1.099 6.195c-.414-.868-1.595-.923-2.105-.163l-.093.163L9.51 9.121l-3.2.424c-1.021.135-1.417 1.392-.68 2.094l2.342 2.23-.588 3.189c-.184.998.87 1.787 1.778 1.293L12 16.805l2.839 1.546c.909.494 1.962-.295 1.778-1.293l-.589-3.189 2.343-2.23c.737-.702.341-1.96-.68-2.094l-3.2-.424-1.392-2.926z"
        fill={color}
      />
    </svg>
  );
};

MessageReviewFilled24.category = 'Communication';

export default MessageReviewFilled24;

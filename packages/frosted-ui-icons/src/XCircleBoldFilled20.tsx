import * as React from 'react';
import { IconProps } from './types';

export const XCircleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM13.0645 6.87695C12.6251 6.4379 11.9119 6.43771 11.4727 6.87695L9.94141 8.40918L8.46777 6.93555C8.02845 6.49622 7.3163 6.49626 6.87695 6.93555C6.43766 7.37489 6.43763 8.08704 6.87695 8.52637L8.35059 10L6.87695 11.4736C6.43771 11.9129 6.4379 12.6251 6.87695 13.0645C7.31629 13.5038 8.02843 13.5038 8.46777 13.0645L9.94141 11.5908L11.4727 13.123C11.912 13.5624 12.6251 13.5623 13.0645 13.123C13.5037 12.6837 13.5038 11.9706 13.0645 11.5312L11.5322 10L13.0645 8.46875C13.5038 8.02941 13.5038 7.31629 13.0645 6.87695Z"
        fill={color}
      />
    </svg>
  );
};

XCircleBoldFilled20.category = 'Interface General';

export default XCircleBoldFilled20;

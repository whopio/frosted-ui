import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18 2.75C18.5523 2.75 19 3.19771 19 3.75V10.6875C19 12.1027 17.8527 13.25 16.4375 13.25H4.52832L6.68359 15.2705C7.08645 15.6482 7.10706 16.2807 6.72949 16.6836C6.35181 17.0865 5.71933 17.1071 5.31641 16.7295L1.31641 12.9795C1.11476 12.7904 1 12.5264 1 12.25C1 11.9736 1.11476 11.7096 1.31641 11.5205L5.31641 7.77051C5.71933 7.39294 6.35181 7.41355 6.72949 7.81641C7.10706 8.21933 7.08645 8.85181 6.68359 9.22949L4.52832 11.25H16.4375C16.7482 11.25 17 10.9982 17 10.6875V3.75C17 3.19771 17.4477 2.75 18 2.75Z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleLeftBold20.category = 'Arrows';

export default ArrowDownAngleLeftBold20;

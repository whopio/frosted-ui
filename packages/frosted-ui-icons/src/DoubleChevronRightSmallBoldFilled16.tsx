import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.94189 5.6748C7.35618 5.08904 7.3562 4.13948 7.94189 3.55371C8.5277 2.96827 9.47731 2.96809 10.063 3.55371L13.2104 6.70117C13.9261 7.41704 13.926 8.57802 13.2104 9.29395L10.063 12.4414C9.47726 13.0271 8.5277 13.027 7.94189 12.4414C7.35612 11.8556 7.35612 10.9061 7.94189 10.3203L10.2642 7.99805L7.94189 5.6748ZM2.69189 5.6748C2.10618 5.08904 2.1062 4.13948 2.69189 3.55371C3.27769 2.96827 4.22731 2.96809 4.81299 3.55371L7.96045 6.70117C8.67611 7.41704 8.67602 8.57802 7.96045 9.29395L4.81299 12.4414C4.22726 13.0271 3.2777 13.027 2.69189 12.4414C2.10612 11.8556 2.10612 10.9061 2.69189 10.3203L5.01416 7.99805L2.69189 5.6748Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronRightSmallBoldFilled16.category = 'Arrows';

export default DoubleChevronRightSmallBoldFilled16;

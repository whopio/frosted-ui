import * as React from 'react';
import { IconProps } from './types';

export const MailNotification12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotification12"
      {...props}
    >
      <path
        d="M7.348 1c-.062.24-.098.49-.098.75s.036.51.098.75H3c-.636 0-1.18.396-1.397.954l4.206 1.978c.12.056.261.057.382 0l2.45-1.154c.465.297 1.016.472 1.609.472.654 0 1.257-.212 1.75-.567V8c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3V4c0-1.657 1.343-3 3-3h4.348zm-.519 5.79c-.525.246-1.133.246-1.658 0L1.5 5.062V8c0 .828.672 1.5 1.5 1.5h6c.828 0 1.5-.672 1.5-1.5V5.063L6.83 6.79zM10.25 0C11.216 0 12 .784 12 1.75s-.784 1.75-1.75 1.75S8.5 2.716 8.5 1.75 9.284 0 10.25 0z"
        fill={color}
      />
    </svg>
  );
};

MailNotification12.category = 'Communication';

export default MailNotification12;
